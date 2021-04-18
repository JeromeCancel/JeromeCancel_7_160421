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
          onDelete: 'CASCADE'
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
          onDelete: 'CASCADE'
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false,
          onDelete: 'CASCADE'
        },
        firstName: {
          type: Sequelize.STRING(30),
          allowNull: false,
          onDelete: 'CASCADE'
        },
        lastName: {
          type: Sequelize.STRING(30),
          allowNull: false,
          onDelete: 'CASCADE'
        },
        isAdmin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          default: false,
          onDelete: 'CASCADE'
        },
        pictureUrl: {
          type: Sequelize.STRING,
          allowNull: true,
          onDelete: 'CASCADE'
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
