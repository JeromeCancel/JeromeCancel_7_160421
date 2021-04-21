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
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Post',
        key: 'id'
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize,
    modelName: 'Like',
    timestamps: false
  }
);

  return Like;
};