'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     */
      await queryInterface.createTable('Likes', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
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
        postId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'Posts',
            key: 'id'
          },
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
    await queryInterface.dropTable('Likes');
  }
};
