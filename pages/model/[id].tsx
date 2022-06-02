import {CommonStyle} from "../../components/pagesStyles/commonStyle";
import {PageTitle} from "../../components/content/PageTitle";
import axios from "axios";
import {GetServerSideProps} from "next";
import {Model_page_response} from "../../database/model_page";
import ContentDiv from "../../components/layout/ContentDiv";
import {useState} from "react";
import {DownloadButton} from "../../components/content/downloadButton";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
    const res = await axios.get(`http://localhost:3000/api/model_page/${id}`)
        .catch(err => console.log(err));
    return {
        props: {
            model: res?.data
        }
    }
};

interface ModelPageProps {
    model: Model_page_response
}

function Model_pageComponent(props: ModelPageProps) {
    return <>
        <CommonStyle>
            <PageTitle title={props.model.name + " by " + props.model.author}/>

            <ContentDiv>
                <img src={props.model.picture} alt={props.model.name}/>

                <h2>Description</h2>
                <p>{props.model.description}</p>

                <br/>

                <DownloadButton modelfiles={props.model.files}/>
            </ContentDiv>
        </CommonStyle>
    </>;
}

export default Model_pageComponent;