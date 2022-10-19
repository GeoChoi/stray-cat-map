'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cat_record extends Model {
    static associate(models) {
      this.belongsTo(models.cat, { foreignKey: { allowNull: false } });
      this.hasMany(models.color, {
        foreignKey: {
          allowNull: false,
          primaryKey: true
        }
      });
    }
  }
  cat_record.init({
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cat_record',
    underscored: true,
  });
  return cat_record;
};