'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {

    static associate(models) {

        models.User.belongsToMany(models.Post, {
            through: models.Comment,
            foreignKey: 'userId',
            otherKey: 'postId',
        });

        models.Post.belongsToMany(models.User, {
            through: models.Comment,
            foreignKey: 'postId',
            otherKey: 'userId',
        });

        models.Comment.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
            onDelete: 'set null',
        });

        models.Comment.belongsTo(models.Post, {
            foreignKey: 'postId',
            as: 'post',
            onDelete: 'set null',
        });
    }

  }
  Comment.init({
    columnA: {
      type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      field: 'id'
    },
    columnB: {
      type: DataTypes.STRING,
          allowNull: false,
      field: 'content'
    },
    columnC: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        },
      field: 'userId'
    },
    columnD: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Post',
          key: 'id',
          },
        field: 'postId'
      },
  },{sequelize});

  return Comment;
};