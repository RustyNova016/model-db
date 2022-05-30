import sequelize from "../tools/CRUD/SequelizeConnection";
import {DataTypes} from "sequelize";
import Model_page, {DBModel} from "./model_page";
import database from "./database";

class Model_file extends DBModel<Model_file> {
    declare id: number;
    declare name: string;
    declare version: string;

    static associate(models: typeof database) {
        Model_file.belongsTo(models.model_file, {
            as: "files",
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
    }
}, {
    sequelize,
    modelName: 'model_files'
});

export default Model_file;

/** Type of a responce from the API */
export interface Model_file_response extends Model_file {

}
