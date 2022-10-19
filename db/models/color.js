'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class color extends Model {
    static associate(models) {
      this.belongsTo(models.cat_record, {
        foreignKey: {
          allowNull: false,
          primaryKey: true
        }
      });
    }
  }
  color.init({
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'color',
    underscored: true,
  });
  return color;
};