'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Trains', [
      {
        trainName: 'Madurai Express',
        stationId: 1, // Ensure this station exists
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trainName: 'Kaniya Express',
        stationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trainName: 'RMD Express',
        stationId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trainName: 'Trichy Express',
        stationId: 1, // Ensure this station exists
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trainName: 'Salem Express',
        stationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trainName: 'Sithaparam Express',
        stationId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Trains', null, {});
  }
};
