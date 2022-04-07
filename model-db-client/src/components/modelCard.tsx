import React, {FunctionComponent} from "react";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../components/modelCard.css";
import {IModelType} from "../data/modelType/modelType.interface";
import {ModelTypePill} from "./model/modelTypePill";

interface IModelCardProps {
    description: string
    imgLink: string
    link: string,
    modelType: IModelType
    title: string
}

const ModelCard: FunctionComponent<IModelCardProps> = (props) => {

    return (
        <>
            <Card style={{width: "18rem"}} className={"modelCard"}>
                <Card.Img variant="top" src={props.imgLink}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <ModelTypePill modelType={props.modelType}/>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Link to={props.link}>
                        <Button variant="primary">See the model</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default ModelCard;
