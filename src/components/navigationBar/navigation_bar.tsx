import { Button, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import "./navigation_bar.css";

export default function NavigationBar() {
    const history = useHistory();
    return (
        <Navbar variant={"dark"} bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto justify-content-center">
                    <Nav.Item>
                        <Button
                            variant={"outline-light"}
                            className="m-3 btn-lg"
                            onClick={() => history.push("/profile")}
                        >
                            CAR PROFILE
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push("/services")}
                            className="m-3 btn-lg"
                        >
                            BOOK SERVICES
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            variant={"outline-light"}
                            className="m-3 btn-lg"
                        >
                            100% FREE
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push("/workshop")}
                            className="m-3 btn-lg"
                        >
                            VIEW WORKSHOP
                        </Button>
                    </Nav.Item>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
