import sequelize from "../config/SequelizeConnection";
import {DataTypes} from "sequelize";
import {Model_file} from "./model_file";

export const Model_format = sequelize.define('model_format', {
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
    extension: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
});

Model_format.hasMany(Model_file);
