import sequelize from "../tools/CRUD/SequelizeConnection";
import {DataTypes} from "sequelize";
import {DBModel} from "./model_page";
import database, {databaseResponse} from "./database";

class Model_file extends DBModel<Model_file> {
    declare id: number;
    declare name: string;
    declare version: string;
    declare link: string;
    declare type: string;

    static associate(models: typeof database) {
        Model_file.belongsTo(models.model_file, {
            as: "user",
            foreignKey: 'pageID',
        });
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
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'model_files'
});

export default Model_file;

/** Type of a responce from the API */
export interface Model_file_response extends Model_file, databaseResponse {

}
