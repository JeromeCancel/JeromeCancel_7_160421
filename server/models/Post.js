'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {

      models.Post.belongsTo(models.User);
      models.Post.hasMany(models.Comment);
      models.Post.hasMany(models.Like);
    }

  }
  Post.init({
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
      field: 'title'
    },
    columnC: {
      type: DataTypes.TEXT,
          allowNull: true,
      field: 'content'
    },
    columnD: {
      type: DataTypes.STRING,
          allowNull: true,
      field: 'imageUrl'
    },
    columnE: {
      type: DataTypes.STRING,
          allowNull: true,
      field: 'videoUrl'
    },
  },{sequelize});

  return Post;
};