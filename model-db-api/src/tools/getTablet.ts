/*
import {checkIfTableExist, getTable} from "./getTable";


describe('The function getTable() should return a table', function () {
    if (process.env.MY_SQL_CONNECTION_ESTABLISHED === 'false') {test.only('skipping all other things', () => {
        console.warn('skipping tests');
    });}

        it('should return the user table', async function () {
            const table = await getTable('users');
            expect(table.getName()).toBe('users');
        });

    it('should return an error', async function () {
        await expect(getTable('a_table_that_does_not_exist')).rejects.toThrow(new Error(`Table "a_table_that_does_not_exist" does not exist`));
    });
});

describe('Check if a table exist', function () {
    if (process.env.MY_SQL_CONNECTION_ESTABLISHED === 'false') {
        it.only('skipping all other things', () => {
        console.warn('skipping tests');
    });}

    it('should return true', async function () {
        const table = await checkIfTableExist('users');
        expect(table).toBe(true);
    });

    it('should return false', async function () {
        const table = await checkIfTableExist('a_table_that_does_not_exist');
        expect(table).toBe(false);
    });
});
*/
