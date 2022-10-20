const { Sequelize, cat_record: catRecord } = require('../db/models');

exports.findAll = async (req, res) => {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;

  const here = Sequelize.fn('Point', longitude, latitude);
  const there = Sequelize.fn('Point', Sequelize.col('longitude'), Sequelize.col('latitude'));
  const distance = Sequelize.fn('ST_Distance_Sphere', here, there);

  catRecord.findAll({ attributes: [[distance, 'distance']] })
    .then(result => {
      res.send(result);
    });
};
