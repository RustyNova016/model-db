'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Model_files', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            version: {
                type: Sequelize.STRING,
                allowNull: false
            },
            link: {
                type: Sequelize.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Model_files');
    }
};