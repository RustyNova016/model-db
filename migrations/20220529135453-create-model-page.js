'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Model_pages', {
            id: {
                type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true
            },
            name: {
                type: Sequelize.STRING, allowNull: false,
            },
            description: {
                type: Sequelize.STRING, allowNull: false
            }, ageRestricted: {
                type: Sequelize.BOOLEAN, allowNull: false,
            }, picture: {
                type: Sequelize.STRING, allowNull: true,
            }, author: {
                type: Sequelize.STRING, allowNull: true
            },
        });
    }, async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Model_pages');
    }
};