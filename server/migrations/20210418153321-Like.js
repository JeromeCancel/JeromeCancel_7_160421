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
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id'
          },
          onDelete: 'CASCADE'
        },
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Posts',
            key: 'id'
          },
          onDelete: 'CASCADE'
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
          onDelete: 'CASCADE'
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
          onDelete: 'CASCADE'
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