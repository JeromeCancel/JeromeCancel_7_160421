'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     */
      await queryInterface.createTable('Posts', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          onDelete: 'CASCADE'
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id'
          },
          onDelete: 'CASCADE'
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
          onDelete: 'CASCADE'
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: true,
          onDelete: 'CASCADE'
        },
        imageUrl: {
          type: Sequelize.STRING,
          allowNull: true,
          onDelete: 'CASCADE'
        },
        videoUrl: {
          type: Sequelize.STRING,
          allowNull: true,
          onDelete: 'CASCADE'
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     */
    await queryInterface.dropTable('Posts');
  }
};
