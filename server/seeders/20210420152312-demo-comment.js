'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
      await queryInterface.bulkInsert('Comments', [{
        userId: '1',
        postId: '1',
        content: 'Un commentaire pour tester les associations.',
     },
     {
        userId: '2',
        postId: '2',
        content: 'Un deuxième commentaire avec différents user et post.'
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete('Comments', null, {});
     
  }
};
