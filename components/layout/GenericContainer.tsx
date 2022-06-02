import {PropsWithChildren} from "react";
import "./GenericContainer.module.scss";
import {Container} from "react-bootstrap";


export function GenericContainer(props: PropsWithChildren<any>): JSX.Element {
    return <>
        <Container>
            {props.children}
        </Container>
    </>;
}