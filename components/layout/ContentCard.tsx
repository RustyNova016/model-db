import "../../../src/components/layout/ContentCard.css";
import {PropsWithChildren} from "react";

interface IContentCardProps {
    top?: boolean;
    sides?: boolean;
}

function ContentCard(props: PropsWithChildren<IContentCardProps>) {
    let classname = "content-card"

    if (props.top) {
        classname += " top-border"
    }
    if (props.sides) {
        classname += " side-border"
    }

    return (<div className={classname}>{props.children}</div>);
}

export default ContentCard;
