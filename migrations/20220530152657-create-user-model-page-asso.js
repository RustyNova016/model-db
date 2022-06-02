'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.addColumn(
            "model_pages", // name of Source model
            "userId", // name of the key we're adding
            { // Atributes of the field
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "user",
                    key: "id"
                },
            })
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.removeColumn("model_pages", "userId")
    }
};
