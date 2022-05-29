import {DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import sequelize from "../tools/CRUD/SequelizeConnection";
import database from "./database";


export class DBModel<modeltype extends Model> extends Model<InferAttributes<modeltype>, InferCreationAttributes<modeltype>> {
    static associate(models: any) {
    }
}

class Model_page extends DBModel<Model_page> {
    declare id: number;
    declare name: string;
    declare ageRestricted: boolean;

    static associate(models: typeof database) {
        Model_page.hasMany(models.model_file);
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
    ageRestricted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'model_pages'
});

export default Model_page;

