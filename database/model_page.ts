import {DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import sequelize from "../tools/CRUD/SequelizeConnection";
import database from "./database";
import {Model_file_response} from "./model_file";
import {User_response} from "./user";


export class DBModel<modeltype extends Model> extends Model<InferAttributes<modeltype>, InferCreationAttributes<modeltype>> {
    static associate(models: any) {
    }
}

class Model_page extends DBModel<Model_page> {
    declare id: number;
    declare name: string;
    declare description: string;
    declare ageRestricted: boolean;
    declare picture: string;
    declare author: string;

    static associate(models: typeof database) {
        Model_page.hasMany(models.model_file, {
            as: "files",
            foreignKey: 'pageID',
        });

        Model_page.belongsTo(models.user, {
            as: "user",
            foreignKey: 'userID',
        });
    }
}

Model_page.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ageRestricted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize,
    modelName: 'model_pages'
});

export default Model_page;

/** Type of a responce from the API */
export interface Model_page_response extends Model_page {
    files: Model_file_response[];
    user: User_response;
}