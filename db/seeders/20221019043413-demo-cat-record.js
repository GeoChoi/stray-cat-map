'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cat_records', [{
      name: '코코',
      sex: 'F',
      age: 12,
      latitude: 37.5666805,
      longitude: 126.7784147,
      created_at: new Date(new Date().setMinutes(new Date().getMinutes() - 80)),
      updated_at: new Date(),
      cat_id: 1
    }, {
      name: '코코',
      sex: 'F',
      age: 12,
      latitude: 37.5666805,
      longitude: 126.8784147,
      created_at: new Date(new Date().setMinutes(new Date().getMinutes() - 60)),
      updated_at: new Date(),
      cat_id: 1
    }, {
      name: '코코',
      sex: 'F',
      age: 12,
      latitude: 37.3666805,
      longitude: 126.9784147,
      created_at: new Date(new Date().setMinutes(new Date().getMinutes() - 40)),
      updated_at: new Date(),
      cat_id: 1
    }, {
      name: '코코',
      sex: 'F',
      age: 12,
      latitude: 37.4666805,
      longitude: 126.9784147,
      created_at: new Date(new Date().setMinutes(new Date().getMinutes() - 20)),
      updated_at: new Date(),
      cat_id: 1
    }, {
      name: '코코',
      sex: 'F',
      age: 12,
      latitude: 37.5666805,
      longitude: 126.9784147,
      created_at: new Date(),
      updated_at: new Date(),
      cat_id: 1
    }, {
      name: '보리',
      sex: 'M',
      age: 18,
      latitude: 36.5666805,
      longitude: 125.9784147,
      created_at: new Date(),
      updated_at: new Date(),
      cat_id: 2
    }, {
      name: '보리',
      sex: 'M',
      age: 18,
      latitude: 36.4666805,
      longitude: 125.8784147,
      created_at: new Date(),
      updated_at: new Date(),
      cat_id: 2
    }, {
      name: '모모',
      sex: 'F',
      age: 24,
      latitude: 36.3666805,
      longitude: 125.7784147,
      created_at: new Date(),
      updated_at: new Date(),
      cat_id: 2
    }, {
      latitude: 35.5666805,
      longitude: 124.9784147,
      created_at: new Date(),
      updated_at: new Date(),
      cat_id: 3
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cat_records', null, {});
  }
};
