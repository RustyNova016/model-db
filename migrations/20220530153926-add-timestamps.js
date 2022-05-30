'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.addColumn(
            "user", // name of Source model
            "createdAt", // name of the key we're adding
            { // Atributes of the field
                type: Sequelize.DATE,
                allowNull: false,
            }
        )

        await queryInterface.addColumn(
            "user", // name of Source model
            "updatedAt", // name of the key we're adding
            { // Atributes of the field
                type: Sequelize.DATE,
                allowNull: false,
            }
        )

        await queryInterface.addColumn(
            "model_pages", // name of Source model
            "createdAt", // name of the key we're adding
            { // Atributes of the field
                type: Sequelize.DATE,
                allowNull: false,
            }
        )

        await queryInterface.addColumn(
            "model_pages", // name of Source model
            "updatedAt", // name of the key we're adding
            { // Atributes of the field
                type: Sequelize.DATE,
                allowNull: false,
            }
        )

        await queryInterface.addColumn(
            "model_files", // name of Source model
            "createdAt", // name of the key we're adding
            { // Atributes of the field
                type: Sequelize.DATE,
                allowNull: false,
            }
        )

        await queryInterface.addColumn(
            "model_files", // name of Source model
            "updatedAt", // name of the key we're adding
            { // Atributes of the field
                type: Sequelize.DATE,
                allowNull: false,
            }
        )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.removeColumn("user", "createdAt")
        await queryInterface.removeColumn("user", "updatedAt")
        await queryInterface.removeColumn("model_pages", "createdAt")
        await queryInterface.removeColumn("model_pages", "updatedAt")
        await queryInterface.removeColumn("model_files", "createdAt")
        await queryInterface.removeColumn("model_files", "updatedAt")
    }
};
