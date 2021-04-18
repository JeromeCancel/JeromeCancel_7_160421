'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

      models.User.hasMany(models.Post)
    }

  }
  User.init({
    columnA: {
      type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      field: 'id'
    },
    columnB: {
      type: DataTypes.STRING(100),
          allowNull: false,
          unique: true,
      field: 'email'
    },
    columnC: {
      type: DataTypes.STRING(100),
          allowNull: false,
      field: 'password'
    },
    columnD: {
      type: DataTypes.STRING(30),
          allowNull: false,
      field: 'firstName'
    },
    columnE: {
      type: DataTypes.STRING(30),
          allowNull: false,
      field: 'lastName'
    },
    columnF: {
      type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
      field: 'isAdmin'
    },
    columnG: {
      type: DataTypes.STRING,
          allowNull: true,
      field: 'pictureUrl'
    },
  },{sequelize});

  return User;
};