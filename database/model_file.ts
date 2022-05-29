import sequelize from "../tools/CRUD/SequelizeConnection";
import {DataTypes} from "sequelize";
import {DBModel} from "./model_page";
import database from "./database";

class Model_file extends DBModel<Model_file> {
    declare id: number;
    declare name: string;
    declare version: string;

    static associate(models: typeof database) {
        Model_file.hasMany(models.model_file);
    }
}

Model_file.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    version: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'model_files'
});

export default Model_file;
