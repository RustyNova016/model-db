import sequelize from "../config/SequelizeConnection";
import {DataTypes} from "sequelize";

export const Model_file = sequelize.define('model_file', {
    // Model attributes are defined here
    idModelFile: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameModel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    versionNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isVersionOf: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    isEditOf: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
});