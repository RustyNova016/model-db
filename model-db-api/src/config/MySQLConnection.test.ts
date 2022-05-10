import {MySQLConnection, TableDoesNotExistError} from "./MySQLConnection";
import Table from "mysqlx/lib/Table";

// Values
let existingTableName = "users";
let nonExistingTable = "non_existing_table";

// Tests
describe('MySQLConnection class', function () {
    if (process.env.TEST_TENV === "GITHUB_WORKFLOW") {
        it.only("can't connect so skip", () => {
            console.warn('Cannot connect to MySQL database, skipping tests');
        });
    }

    it('should be able to connect to the database', async function () {
        expect(await MySQLConnection.checkConnection()).toBe(true);
    });

    describe('The connected class', function () {
        it('should be able to create a session', function () {
            expect(MySQLConnection.getInstance().getSession()).toBeDefined();
        });

        it("should be able to get a schema", function () {
            expect(MySQLConnection.getInstance().getSchema()).toBeDefined();
        });

        it("should be able to get an existing table", async function () {

            expect(await MySQLConnection.getInstance().getTable(existingTableName)).toBeDefined();
        });

        it("should not be able to get a non existing table", async function () {
            await expect(MySQLConnection.getInstance().getTable(nonExistingTable)).rejects.toThrow(
                new TableDoesNotExistError(nonExistingTable)
            );
        });
    });
});