'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {

    static associate(models) {

        models.User.belongsToMany(models.Post, {
            through: models.Like,
            foreignKey: 'userId',
            otherKey: 'postId',
        });

        models.Post.belongsToMany(models.User, {
            through: models.Like,
            foreignKey: 'postId',
            otherKey: 'userId',
        });

        models.Like.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
            onDelete: 'set null',
        });

        models.Like.belongsTo(models.Post, {
            foreignKey: 'postId',
            as: 'post',
            onDelete: 'set null',
        });
    }

  }
  Like.init({
    columnA: {
      type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      field: 'id'
    },
    columnB: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        },
      field: 'userId'
    },
    columnC: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Post',
          key: 'id',
          },
        field: 'postId'
      },
  },{sequelize});

  return Like;
};