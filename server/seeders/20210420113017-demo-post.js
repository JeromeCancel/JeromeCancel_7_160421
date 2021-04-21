'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
      await queryInterface.bulkInsert('Posts', [{
        title: 'Article seed de test',
        content: 'Artcile de test crée automatiquement via les seeds pour remplir le contenu du site',
        userId: '1',
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
