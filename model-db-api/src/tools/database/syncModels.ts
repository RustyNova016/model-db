import {Model_file} from "../../model/model_file";
import {Model_format} from "../../model/model_format";
import {Model_page} from "../../model/model_page";
import {User} from "../../model/user";

async function syncModels(models: any[]) {
    for (const model of models) {
        await model.sync({alter: true});
    }
}

export async function migrateDB() {
    const models = [
        Model_file,
        Model_format,
        Model_page,
        User
    ];

    await syncModels(models);
    await addConstraints();
    await syncModels(models);
}

async function addConstraints() {
    Model_format.hasMany(Model_file);


    Model_file.hasMany(Model_file, {
        foreignKey: {
            name: 'isVersionOf',
            allowNull: true
        },
    });

    Model_file.hasMany(Model_file, {
        foreignKey: {
            name: 'isEditOf',
            allowNull: true
        },
    });

    Model_page.hasMany(Model_file, {
        foreignKey: {
            name: 'shownIn',
            allowNull: true
        },
    });

    Model_page.belongsTo(User, {
        foreignKey: {
            name: 'publishedBy',
            allowNull: true
        },
    });
}