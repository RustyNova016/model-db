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
                    picture: 'https://oss.aplaybox.com/uploads/works/previews/20220521/6ebf7858ece7868c8e6bbb6cc9470df8.jpg',
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
