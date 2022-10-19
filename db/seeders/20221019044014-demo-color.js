'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Colors', [{
      color: 'white',
      cat_record_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      color: 'white',
      cat_record_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      color: 'white',
      cat_record_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      color: 'black',
      cat_record_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
