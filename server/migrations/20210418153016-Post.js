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
          onDelete: 'SET NULL'
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'Users',
            key: 'id'
          },
          onDelete: 'SET NULL'
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
          onDelete: 'SET NULL'
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: true,
          onDelete: 'SET NULL'
        },
        imageUrl: {
          type: Sequelize.STRING,
          allowNull: true,
          onDelete: 'SET NULL'
        },
        videoUrl: {
          type: Sequelize.STRING,
          allowNull: true,
          onDelete: 'SET NULL'
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
          onDelete: 'SET NULL'
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
          onDelete: 'SET NULL'
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
