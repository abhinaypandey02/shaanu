import { Button, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import "./navigation_bar.css";

export default function NavigationBar() {
    const history = useHistory();
    return (
   
        <Navbar sticky="top" variant={"dark"} bg="dark" className='my-md-4 sticky-top my-3' expand="lg">
            <div className="container">
        <Navbar.Brand href="#services" className='ml-md-3'>
            <img alt="logo" className='img-fluid bg-warning border rounded-circle mr-2' width="50" height="50" src='https://images.vexels.com/media/users/3/144355/isolated/preview/0a53cf7ef3dcdc995f7f20c13c697a25-speed-car-lines-logo-by-vexels.png'/>
            <strong>Car Plus</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto justify-content-center">
                    <Nav.Item>
                        <Button
                            variant={"outline-light"}
                            className="m-2 rounded-0"
                            onClick={() => history.push("/profile")}
                            id='navbutton'
                        >
                            CAR PROFILE
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push("/services")}
                            className="m-2 rounded-0"
                            id='navbutton'
                        >
                            BOOK SERVICES
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            variant={"outline-light"}
                            className="m-2 rounded-0"
                            onClick={() => history.push("/freeservices")}
                            id='navbutton'
                        >
                            100% FREE
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push("/workshop")}
                            className="m-2  rounded-0"
                            id='navbutton'
                        >
                            VIEW WORKSHOP
                        </Button>
                    </Nav.Item>
                    
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
      
    );
}
