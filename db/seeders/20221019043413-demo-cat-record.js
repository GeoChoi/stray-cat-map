'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cat_records', [{
      name: '코코',
      sex: 'F',
      age: 12,
      latitude: 37.5666805,
      longitude: 126.9584147,
      created_at: new Date(new Date().setMinutes(new Date().getMinutes() - 80)),
      updated_at: new Date(),
      cat_id: 1
    }, {
      name: '코코',
      sex: 'F',
      age: 12,
      latitude: 37.5666805,
      longitude: 126.9684147,
      created_at: new Date(new Date().setMinutes(new Date().getMinutes() - 60)),
      updated_at: new Date(),
      cat_id: 1
    }, {
      name: '코코',
      sex: 'F',
      age: 12,
      latitude: 37.5646805,
      longitude: 126.9784147,
      created_at: new Date(new Date().setMinutes(new Date().getMinutes() - 40)),
      updated_at: new Date(),
      cat_id: 1
    }, {
      name: '코코',
      sex: 'F',
      age: 12,
      latitude: 37.5656805,
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
      latitude: 37.5566805,
      longitude: 126.9684147,
      created_at: new Date(),
      updated_at: new Date(),
      cat_id: 2
    }, {
      name: '보리',
      sex: 'M',
      age: 18,
      latitude: 37.5556805,
      longitude: 126.9684147,
      created_at: new Date(),
      updated_at: new Date(),
      cat_id: 2
    }, {
      name: '모모',
      sex: 'F',
      age: 24,
      latitude: 37.5546805,
      longitude: 126.9684147,
      created_at: new Date(),
      updated_at: new Date(),
      cat_id: 2
    }, {
      latitude: 37.5466805,
      longitude: 126.9584147,
      created_at: new Date(),
      updated_at: new Date(),
      cat_id: 3
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cat_records', null, {});
  }
};
