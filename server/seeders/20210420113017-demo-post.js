'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
      await queryInterface.bulkInsert('Posts', [{
        title: 'Article seed de test',
        content: 'Article de test crée automatiquement via les seeds pour remplir le contenu du site',
        userId: '1'
     },
     {
        title: 'Un second article de test',
        content: 'Un autre article de test avec un user différents pour tester',
        userId: '2'
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete('Posts', null, {});
     
  }
};
