/** Initialize the database models */

import Model_page from "./model_page";
import Model_file from "./model_file";
import User from "./user";

export interface databaseResponse {
    createdAt: Date;
    updatedAt: Date;
}

const database = {
    model_file: Model_file,
    model_page: Model_page,
    user: User,
}

Object.values(database).forEach((model: any) => {
    if (model.associate) {
        model.associate(database);
    }
});

export default database;