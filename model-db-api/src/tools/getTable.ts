import {ITable} from "mysqlx/lib/interfaces";
import {databaseSchema} from "../config/MYSQLDB";

export async function getTable(tableName: string): Promise<ITable> {
    if (await checkIfTableExist(tableName)) {
        return databaseSchema.then(schema => schema.getTable(tableName));
    } else {
        throw new Error(`Table "${tableName}" does not exist`);
    }
}

export function checkIfTableExist(tableName: string): Promise<boolean> {
    return databaseSchema.then(schema => schema.getTable(tableName)).then(async table => {
        return await table.existsInDatabase();
    });
}
