const { Sequelize, cat_record: catRecord } = require('../db/models');

const searchByDistance = (distance = 1000, latitude = 37.5666805, longitude = 126.9784147) => {
  const here = Sequelize.fn('Point', longitude, latitude);
  const there = Sequelize.fn('Point', Sequelize.col('longitude'), Sequelize.col('latitude'));
  const lhs = Sequelize.fn('ST_Distance_Sphere', here, there); // unit: meters
  return Sequelize.where(lhs, { [Sequelize.Op.lte]: distance });
};

const searchByHour = hour => {
  const rhs = new Date(new Date() - hour * 60 * 60 * 1000); // unit: milliseconds
  return { created_at: { [Sequelize.Op.gte]: rhs } };
};

const parseQuery = req => {
  const conditions = [];
  if (req.query.distance || req.query.latitude || req.query.longitude)
    conditions.push(searchByDistance(req.query.distance, req.query.latitude, req.query.longitude));
  if (req.query.hour)
    conditions.push(searchByHour(req.query.hour));
  return conditions;
}

exports.findAll = async (req, res, next) => {
  catRecord.findAll({ where: { [Sequelize.Op.and]: parseQuery(req) } })
    .then(result => res.json(result))
    .catch(err => next(err));
};
