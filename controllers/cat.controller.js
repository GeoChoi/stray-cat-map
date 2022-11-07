const { Sequelize, cat } = require('../db/models');

exports.create = async (req, res, next) => {
  try {
    const result = await cat.create({});
    res.json(result);
  } catch (err) {
    next(err);
  }
};
