import React, {FunctionComponent} from "react";
import {Button, Card} from "react-bootstrap";
import styles from "./modelCard.module.scss";
import Link from "next/link";

interface IModelCardProps {
    description: string
    imgLink: string
    link: string,
    title: string
}

const ModelCard: FunctionComponent<IModelCardProps> = (props) => {

    return (
        <>
            <Card style={{width: "18rem", margin: "10px"}} className={styles.modelCard}>
                <Card.Img variant="top" src={props.imgLink}/>
                <Card.Body>
                    <Card.Title style={{textAlign: "center"}}>{props.title}</Card.Title>
                    <Card.Text style={{textAlign: "center"}}>
                        {props.description}
                    </Card.Text>
                    <Link href={props.link} style={{textAlign: "center"}}>
                        <Button variant="primary">Voir le model</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default ModelCard;
