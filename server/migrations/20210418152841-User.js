'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     */
      await queryInterface.createTable('Users', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        firstName: {
          type: Sequelize.STRING(30),
          allowNull: false,
          validate: {
            len: [3, 30]
          }
        },
        lastName: {
          type: Sequelize.STRING(30),
          allowNull: false,
          validate: {
            len: [3, 30]
          }
        },
        isAdmin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          default: false,
        },
        pictureUrl: {
          type: Sequelize.STRING,
          allowNull: true,
          validate: {
            isUrl: true
          }
        }
      
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     */
    await queryInterface.dropTable('Users');
  }
};