import {MySQLConnection} from "./MySQLConnection";

describe('MySQLConnection class tests', function () {
    if (process.env.TEST_TENV === "GITHUB_WORKFLOW") {
        it.only("can't connect so skip", () => {
            console.warn('Cannot connect to MySQL database, skipping tests');
        });
    }

    it('should be able to connect to the database', async function () {
        expect(await MySQLConnection.checkConnection()).toBe(true);
    });

    describe('In the connected class', function () {
        it('should be able to create a session', function () {
            expect(MySQLConnection.getInstance().getSession()).toBeDefined();
        });

    });
});