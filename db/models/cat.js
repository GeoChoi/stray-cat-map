'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cat extends Model {
    static associate(models) {
      this.hasMany(models.cat_record, { foreignKey: { allowNull: false } });
    }
  }
  cat.init({}, {
    sequelize,
    modelName: 'cat',
    underscored: true,
  });
  return cat;
};