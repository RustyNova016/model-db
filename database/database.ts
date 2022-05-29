import Model_page from "./model_page";
import {ModelStatic} from "sequelize";
import Model_file from "./model_file";
import sequelize from "../tools/CRUD/SequelizeConnection";

export interface Idatabase {
    Model_file: ModelStatic<Model_file>,
    Model_page: ModelStatic<Model_page>,
}

const database = {
    model_file: Model_file,
    model_page: Model_page,
}

Object.values(database).forEach((model: any) => {
    if (model.associate) {
        model.associate(database);
    }
});

export default database;