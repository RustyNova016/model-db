import {getTable} from "./getTable";

describe('The function should return a table', function () {
    it('should return a table', function () {
        const table = getTable('users');
        expect(table).toBe('users');
    });
});