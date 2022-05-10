import {MySQLCRUD} from "./MySQLCRUD";
import {TableDoesNotExistError} from "../../config/MySQLConnection";

const exisitingTable = "model_file";
const nonExisitingTable = "model_file_non_existing";

describe('MySQLCRUD instancing tests', function () {
    // It should be able to create a new instance of the class with a existing table name
    it('should be able to create a new instance of the class with a existing table name', function () {
        expect(new MySQLCRUD(exisitingTable)).toBeTruthy();
    });

    // It should throw an error when trying to create a new instance of the class with a non existing table name
    it('should throw an error when trying to create a new instance of the class with a non existing table name', async function () {
        await expect(() => new MySQLCRUD(nonExisitingTable).table).rejects.toThrowError(
            new TableDoesNotExistError(nonExisitingTable)
        );
    });
});