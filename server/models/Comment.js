'use strict'

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        /*postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },*/
        /*author: {
            type: DataTypes.INTEGER,
            //allowNull: false,
        },*/
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    })

    return Comment;
};