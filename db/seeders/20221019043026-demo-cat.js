'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cats', [{
      created_at: new Date(),
      updated_at: new Date()
    }, {
      created_at: new Date(),
      updated_at: new Date()
    }, {
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cats', null, {});
  }
};
