export interface IModelFilePrototype {
    nameModel: string;
    versionNumber: string | "0.0.0";
    dateCreation: Date;
}

export interface IModelFile extends IModelFilePrototype{
    idModelFile: number;
}