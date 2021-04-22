'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     */
      await queryInterface.createTable('Comments', { 
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
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Posts',
            key: 'id'
          },
          onDelete: 'CASCADE'
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
          validate: {
            len: [3, 250]
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
    await queryInterface.dropTable('Comments');
  }
};