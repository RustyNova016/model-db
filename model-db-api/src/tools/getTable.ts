/*
import {ITable} from "mysqlx/lib/interfaces";
import {databaseSchema} from "../config/MySQLConnection";

export async function getTable(tableName: string): Promise<ITable> {
    if (process.env.MY_SQL_CONNECTION_ESTABLISHED === "false") {
        throw new Error("Database schema not defined");
    }
    if (await checkIfTableExist(tableName)) {
        return databaseSchema.then(schema => schema.getTable(tableName));
    } else {
        throw new Error(`Table "${tableName}" does not exist`);
    }
}

export function checkIfTableExist(tableName: string): Promise<boolean> {
    if (!databaseSchema) {
        throw new Error("Database schema not defined");
    }
    return databaseSchema.then(schema => schema.getTable(tableName)).then(async table => {
        return await table.existsInDatabase();
    });
}
*/
