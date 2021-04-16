'use strict'

const user = require('../controllers/UserService');


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // Model attributes are defined here
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        firstName: {
          type: DataTypes.STRING(30),
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING(30),
          allowNull: false
        },
        isAdmin: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      },
      {
        timestamps: false
      },
      
    );
    
    return User;
};
