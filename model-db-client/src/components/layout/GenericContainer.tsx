import {PropsWithChildren} from "react";

interface IGenericContainerProps {

}

export function GenericContainer(props: PropsWithChildren<IGenericContainerProps>): JSX.Element {
    return <>
        <div className={"container-fluid bodyContainer"}>
            {props.children}
        </div>
    </>;
}