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
            onDelete: 'cascade',
        });

        models.Comment.belongsTo(models.Post, {
            foreignKey: 'postId',
            as: 'post',
            onDelete: 'cascade',
        });
    }

  }
  Comment.init({
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
    content: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize,
    modelName: 'Comment',
  }
);

  return Comment;
};