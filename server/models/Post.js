'use strict';

const {Model} = require('sequelize');

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
    videoUrl: DataTypes.STRING
  },
  {
    sequelize, 
    modelName: 'Post',
  }
);

  return Post;
};