'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('model_files',
            [
                {
                    id: 1,
                    name: 'ER Archives',
                    version: '1.0.0',
                    link: "https://www.aplaybox.com/details/model/jHIfdltIkZn9",
                    type: '.pmx',
                    pageID: 1,
                },
                {
                    id: 2,
                    name: 'Starchasm Nyx',
                    version: '1.0.0',
                    link: "https://www.aplaybox.com/details/model/8W2sxH3lYZaE",
                    type: '.pmx',
                    pageID: 2,
                }
            ],
            {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('model_files', null, {});
    }
};
