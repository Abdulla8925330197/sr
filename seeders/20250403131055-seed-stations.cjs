'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Stations', [
      {
        stationName: 'Central Chennai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stationName: 'Madurai Junction',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stationName: 'Ramnadu Junction',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Stations', null, {});
  }
};
