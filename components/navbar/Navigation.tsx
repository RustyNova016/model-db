import {Container, Nav, Navbar} from "react-bootstrap";
import {ReactNode} from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import {Session} from "next-auth";
import styles from "./Navigation.module.scss";

//import UserContext from "../context/user";

function NavbarText(props: { className: string, children: ReactNode }) {
    return null;
}

function NotSignedIn(session: Session | null) {
    return <>
        {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
                <a
                    href={`/api/auth/signin`}
                    className={styles.buttonPrimary}
                    onClick={(e) => {
                        e.preventDefault()
                        signIn()
                    }}
                >
                    Sign in
                </a>
            </>
        )}
    </>;
}

function SignedIn(session: Session | null) {
    return <>
        {session?.user && (
            <>
                {session.user.image && (
                    <span
                        style={{backgroundImage: `url('${session.user.image}')`}}
                        className={styles.avatar}
                    />
                )}
                <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br/>
                <strong>{session.user.name}</strong>
                </span>
                <a
                    href={`/api/auth/signout`}
                    className={styles.button}
                    onClick={(e) => {
                        e.preventDefault()
                        signOut()
                    }}
                >
                    Sign out
                </a>
            </>
        )}
    </>;
}

export function Navigation() {
    const {data: session, status} = useSession()
    const loading = status === "loading"

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
                <div>
                    {NotSignedIn(session)}
                    {SignedIn(session)}
                </div>
            </Container>
        </Navbar>
    </>;
}