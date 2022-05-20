import type {NextPage} from 'next'
import {Fade} from "react-awesome-reveal";
import {CommonStyle} from "../components/pagesStyles/commonStyle";

const Home: NextPage = () => {
    return (
        <CommonStyle>
            <Fade direction={"down"} cascade={true}>
                <h1 style={{paddingTop: "50px"}}>Welcome to Model DB!</h1>

                <p>
                    Model DB is a database of models linking to different websites.
                </p>
            </Fade>
        </CommonStyle>
    )
}

export default Home
