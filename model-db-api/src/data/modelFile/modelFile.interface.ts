export interface ModelFilePrototype {
    nameModel: string;
    versionNumber: string | "0.0.0";
    dateCreation: Date;
}

export interface ModelFile extends ModelFilePrototype{
    idModelFile: number;
}