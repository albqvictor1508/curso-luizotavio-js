"use strict";
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('alunos', {
       id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
       },
       nome: {
        type: Sequelize.STRING,
        allowNull: false
       },
       sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
       },
       idade: {
        type: Sequelize.INTEGER,
        allowNull: false
       },
       email: {
        type: Sequelize.STRING,
        allowNull: false
       },
       turno: {
        type: Sequelize.STRING,
        allowNull: false
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false
       }
      }
      );
  },

  async down (queryInterface) {
     await queryInterface.dropTable('alunos');
  }
};
