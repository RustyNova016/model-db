import type {NextPage} from 'next'
import {Fade} from "react-awesome-reveal";
import {CommonStyle} from "../components/pagesStyles/commonStyle";
import {PageTitle} from "../components/content/PageTitle";
import {Button, Col, Row} from "react-bootstrap";
import ContentDiv from "../components/layout/ContentDiv";
import ModelCard from "../components/content/modelCard";
import {SetStateAction, useEffect, useState} from "react";
import Model_page from "../database/model_page";
import axios from "axios";

const Home: NextPage = () => {
    const [models, setModels] = useState<Model_page[]>([]);
    const [search, setSearch] = useState("");

    function refreshModels() {
        if (search === "") {
            axios.get("http://localhost:3000/api/model_page/").then(res => {
                setModels(res.data)
            });
        } else {
            axios.get("http://localhost:3000/api/search/" + search).then(res => {
                setModels(res.data)
            });
        }
    }

    useEffect(() => {
        return () => {
            refreshModels()
        };
    }, []);



    function handleInput(e: { target: { value: SetStateAction<string>; }; }) {
        setSearch(e.target.value);
    }

    return (
        <CommonStyle>
            <Fade direction={"down"} cascade={true} style={{paddingTop: "50px"}}>
                <PageTitle title={"Bienvenue sur Model DB!"}
                           subtitle={"Model DB est une base de donnée de models 3D lien different sites."}></PageTitle>

                <PageTitle title={"Rechercher a model"}></PageTitle>

                <Row className={"justify-content-center"}>
                    <Col md={5}>
                        <div className="form-floating">
                            <input className="form-control" id="floatingPassword" placeholder="Search"
                                   onChange={handleInput}/>
                            <label htmlFor="floatingPassword">Search a model</label>
                        </div>
                    </Col>

                    <Col md={2}>
                        <Button onClick={refreshModels}>Rechercher</Button>
                    </Col>
                </Row>

                <ContentDiv sides={true}>

                    {(models.length > 0) ?
                        models.map((model) => {
                            return (
                                <ModelCard description={model.description}
                                           link={"http://localhost:3000/model/" + model.id}
                                           title={model.name}
                                           imgLink={model.picture}/>)
                        }):
                        <h3>No models found</h3>
                    }
                </ContentDiv>


            </Fade>
        </CommonStyle>
    )
}

export default Home
