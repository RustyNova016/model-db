import React, {FunctionComponent} from "react";
import "../../../src/components/layout/ContentCard.css";

interface IContentCardProps {
    top?: boolean;
    sides?: boolean;
}

const ContentCard: FunctionComponent<IContentCardProps> = (props) => {
    let classname = "content-card"
    if (props.top){
        classname += " top-border"
    }
    if (props.sides){
        classname += " side-border"
    }

    return (<div className={classname}>{props.children}</div>);
};

export default ContentCard;
