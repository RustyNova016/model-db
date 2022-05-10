import {ModelFileService} from "./modelFile.service";
import {IModelFilePrototype} from "./modelFile.interface";

describe('Model file service', function () {
    function getModelFileService() {
        return new ModelFileService();
    }

    it('should be instantiable', async function () {
        await expect(getModelFileService()).toBeTruthy();
    });

    describe('in the instanced class', function () {
        const dummyModelFile: IModelFilePrototype = {
            nameModel: "test",
            dateCreation: new Date(),
            versionNumber: "1",
        };

        // Create a model file
        let createResult = getModelFileService().create(dummyModelFile)

        // Get the new ID
        let idOfDummyRow = createResult.then(value => {
                return value.getAutoIncrementValue()
            }
        );

        // Test the edition of the model file
        getModelFileService().update({nameModel: "testEdited"}, idOfDummyRow);

        it("should be able to add a model file", async function () {
            expect(createResult).toBeTruthy();
        });

        // Todo: Integrate test
        //it("shouldn't allow to add wrong columns", async function () {
        //    const modelFileService = getModelFileService();
        //    const modelFile = {
        //        wrongColumn: "test"
        //    };
        //    await expect(async () => await modelFileService.create(modelFile)).rejects.toThrow(new Error("Unknown column 'wrongColumn' in 'field list'"));
        //});


    });
});