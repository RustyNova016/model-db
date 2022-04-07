import {ITable} from "mysqlx/lib/interfaces";
import {databaseSchema} from "../config/MYSQLDB";

export function getTable(tableName: string): Promise<ITable> {
    return databaseSchema.then(schema => schema.getTable(tableName));
}