'use strict';

const bcrypt = require('bcryptjs');

const hash = bcrypt.hashSync('123456789', 10)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */
      await queryInterface.bulkInsert('Users', [{
        id: '1',
        email: 'admin@seed.com',
        password: hash,
        firstName: 'Admin',
        lastName: 'Seed',
        isAdmin: true
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete('Users', null, {});
     
  }
};
