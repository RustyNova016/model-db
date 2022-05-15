import sequelize from "../config/SequelizeConnection";
import {DataTypes} from "sequelize";

export const Model_page = sequelize.define('model_page', {
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
}, {});


