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
        await queryInterface.bulkInsert('user',
            [
                {
                    id: 1,
                    name: 'RustyNova',
                    password: "test",
                    canSeeAgeRestricted: true,
                }
            ],
            {});

        await queryInterface.bulkInsert('model_pages',
            [
                {
                    id: 1,
                    name: 'ER Archives',
                    ageRestricted: false,
                    description: 'The ER Archives is a collection of documents and images from the Emergency Room.',
                    picture: 'https://media.discordapp.net/attachments/639795231876710400/981807034464870420/unknown.png?width=1191&height=670',
                    author: "秋燚QY",
                    userId: 1,
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

        await queryInterface.bulkDelete('model_pages', null, {});
        await queryInterface.bulkDelete('user', null, {});
    }
};
