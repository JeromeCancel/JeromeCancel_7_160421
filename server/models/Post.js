'use strict'

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        /*author: {
            type: DataTypes.INTEGER,
            //allowNull: false,
        },*/
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        likes: {
            type: DataTypes.INTEGER,
            default: 0
        },
        userLiked: {
            type: DataTypes.INTEGER,
            //allowNull: false
        }
    })

    return Post;
};