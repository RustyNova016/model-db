import sequelize from "../config/SequelizeConnection";
import {DataTypes} from "sequelize";

export const User = sequelize.define('user', {
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    canSeeAgeRestricted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {});