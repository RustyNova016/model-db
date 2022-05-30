import sequelize from "../tools/CRUD/SequelizeConnection";
import {DataTypes} from "sequelize";
import {DBModel} from "./model_page";
import database from "./database";
import Model_file from "./model_file";

class User extends DBModel<User> {
    declare id: number;
    declare name: string;
    declare password: string;
    declare avatar: string;
    declare canSeeAgeRestricted: boolean;

    static associate(models: typeof database) {
        User.hasMany(models.model_page, {
            foreignKey: 'userId',
            as: 'pages'
        });
    }
}

User.init({
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
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    canSeeAgeRestricted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'user'
});

export default User;

/** Type of a responce from the API */
export interface User_response extends User {

}
