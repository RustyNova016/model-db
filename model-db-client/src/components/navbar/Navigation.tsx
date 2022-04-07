import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ReactNode, useContext} from "react";
import UserContext from "../context/user";

function NavbarText(props: { className: string, children: ReactNode }) {
    return null;
}

export function Navigation() {
    const userContext = useContext(UserContext);
    const { user } = userContext.userState;

    const logout = () => {
        userContext.userDispatch({ type: 'logout', payload: userContext.userState });
    }

    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="">Model DB</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/upload">Add models</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                {user._id !== '' ?
                    <div>
                        <Button>
                            <i className="far fa-sticky-note mr-2"></i>
                            Post a Blog
                        </Button>
                        <NavbarText className="ml-2 mr-2">|</NavbarText>
                        <Button size="sm" onClick={() => logout()}>
                            Logout
                        </Button>
                    </div>

                    :
                    <div>
                        <a>Login</a>|<a>Signup</a>
                    </div>
                }
            </Container>
        </Navbar>
    </>;
}