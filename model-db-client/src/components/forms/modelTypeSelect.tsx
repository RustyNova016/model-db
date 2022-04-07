import React from "react";
import {IModelType} from "../../data/modelType/modelType.interface";

export function ModelTypeSelect() {
    // TODO: Request types to the server

    const modelTypes: IModelType[] = [
        {
            name: "Blender",
            id: 1,
            extension: ".blend",
            color: "#ff0000"
        },
        {
            name: "PMX",
            id: 2,
            extension: ".pmx",
            color: "#00FF00"
        }
    ];

    return (
        <div className="form-floating">
            <select className="form-select" id="ModelTypeSelect" aria-label="Floating label select">
                <option value="0" selected>All</option>
                {
                    modelTypes.map((value) => {
                        return (<option value={value.id}>{value.name} ({value.extension})</option>);
                    })
                }
            </select>
            <label htmlFor="ModelTypeSelect">Model type</label>
        </div>
    );
}