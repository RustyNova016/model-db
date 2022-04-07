import React from "react";
import {IModelType} from "../../data/modelType/modelType.interface";

export function ModelTypePill(props: { modelType: IModelType }) {
    return <span className="modelCard-pill badge rounded-pill"
                 style={{backgroundColor: props.modelType.color}}>
        {props.modelType.extension}
    </span>;
}