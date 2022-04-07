import {getTable} from "./getTable";

export class MysqlCRUD {
    private table;

    constructor(tablename: string) {
        this.table = getTable(tablename);
    }

    public async getAll() {
        return await this.table.then(
            table => {
                return table.select()
                    .execute()
                    .then(rows => {
                            return rows.getRows()
                        }
                    )
            }
        );
    }

}