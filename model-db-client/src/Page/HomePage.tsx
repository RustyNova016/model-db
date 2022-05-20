import {GenericContainer} from "../components/layout/GenericContainer";
import {Fade} from "react-awesome-reveal";

export function HomePage() {
    return (
        <>
            <GenericContainer>
                <Fade direction={"down"} cascade={true}>
                        <h1 style={{paddingTop: "50px"}}>Welcome to Model DB!</h1>

                        <p>
                            Model DB is a database of models for the game <a href="https://www.guildwars2.com/en/">Guild
                            Wars 2</a>.
                            It is a collection of models that are used in the game, and is intended to be used as a
                            reference for
                            other developers.
                        </p>

                </Fade>


            </GenericContainer>
        </>
    );
}