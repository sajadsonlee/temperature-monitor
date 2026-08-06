'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('temperature_readings', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      device_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: 'devices', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      measurement_uid: {
        type: Sequelize.STRING(36),
        allowNull: false
      },
      temperature_c: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false
      },
      sequence: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      received_at: {
        type: Sequelize.DATE(3),
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    await queryInterface.addIndex(
      'temperature_readings',
      ['device_id', 'measurement_uid'],
      { unique: true, name: 'uq_readings_device_measurement' }
    );
    await queryInterface.addIndex(
      'temperature_readings',
      ['device_id', 'received_at'],
      { name: 'idx_readings_device_received_at' 

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('temperature_readings');
  }
};
