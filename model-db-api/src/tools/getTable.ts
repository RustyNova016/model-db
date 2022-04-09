import {ITable} from "mysqlx/lib/interfaces";
import {databaseSchema} from "../config/MYSQLDB";

export async function getTable(tableName: string): Promise<ITable> {
    let iTablePromise = databaseSchema.then(schema => schema.getTable(tableName));
    return await iTablePromise;
}