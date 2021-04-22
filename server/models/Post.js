'use strict';

const {Model} = require('sequelize');
const Moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {

      models.Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      models.Post.hasMany(models.Comment);
      models.Post.hasMany(models.Like);
    }

  }
  Post.init({

    title: DataTypes.STRING,
    content: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    videoUrl: DataTypes.STRING,
    createdAt:{
      type: DataTypes.DATE,
      get: function() {
        return Moment (this.getDataValue("date")).format("YYYY-MM-DD HH:mm:ss")
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get: function() {
        return Moment (this.getDataValue("date")).format("YYYY-MM-DD HH:mm:ss")
      }
    }
  },
  {
    sequelize, 
    modelName: 'Post',
  }
);

  return Post;
};