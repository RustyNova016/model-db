import {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {ModelTypeSelect} from "../components/forms/modelTypeSelect";
import ContentCard from "../components/layout/ContentCard";
import {GenericContainer} from "../components/layout/GenericContainer";
import ModelCard from "../components/modelCard";
import {IModelType} from "../data/modelType/modelType.interface";
import {RequestService} from "../modules/request.service";
import {useQuery} from "react-query";

async function fetchModels() {
    return RequestService.findAll("modelfile");
}

export function SearchPage() {
    const [models, setModels] = useState({});
    const {data, status} = useQuery('modelfiles', fetchModels)

    const test: { model: IModelType } = {
        model: {
            name: "PMX",
            id: 2,
            extension: ".pmx",
            color: "#63cc63"
        }
    };



    return (
        <>
            <GenericContainer>
                <h1>Search a model</h1>

                <Row className={"justify-content-center"}>
                    <Col md={5}>
                        <div className="form-floating">
                            <input className="form-control" id="floatingPassword" placeholder="Search"/>
                            <label htmlFor="floatingPassword">Search a model</label>
                        </div>
                    </Col>

                    <Col md={5}>
                        <ModelTypeSelect/>
                    </Col>
                </Row>

                <ContentCard sides={true}>
                    <ModelCard description={"Test desc"} link={"yolo"} title={"Test Model Card"} modelType={test.model}
                               imgLink={"https://media.discordapp.net/stickers/860143600033464360.png?size=240"}/>
                </ContentCard>


            </GenericContainer>
        </>
    );
}