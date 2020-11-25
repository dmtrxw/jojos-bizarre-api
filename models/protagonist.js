'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Protagonist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Protagonist.init(
    {
      name: DataTypes.STRING,
      stand: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Protagonist',
    }
  );
  return Protagonist;
};
