import { Button, Nav, Navbar } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import "./navigation_bar.css";
import { useUser } from "../../contexts/user_context";
import ROUTES_META from "../../metadata/routes_meta";

export default function NavigationBar() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const [user] = useUser();
  let ROUTES = [];
  if (location.pathname.startsWith(ROUTES_META.admin))
    ROUTES = [
      {
        path: ROUTES_META.admin + ROUTES_META.adminJobs,
        altPaths: [ROUTES_META.admin + ROUTES_META.adminAddJob],
        name: "JOBS",
      },
      {
        path: ROUTES_META.admin + ROUTES_META.adminUsers,
        name: "USERS",
      },
      {
        path: ROUTES_META.admin + ROUTES_META.adminCallback,
        name: "CALLBACK REQS",
      },
      {
        path: ROUTES_META.admin + ROUTES_META.adminBooked,
        name: "BOOKED SESSIONS",
      },
    ];
  else
    ROUTES = [
      {
        path: ROUTES_META.profile,
        name: user ? "CAR PROFILE" : "SIGN UP",
      },
      {
        path: ROUTES_META.services,
        name: "BOOK SERVICES",
      },
      {
        path: ROUTES_META.freeServices,
        name: "100% FREE",
      },
      {
        path: ROUTES_META.workShop,
        name: "VIEW WORKSHOP",
      },
    ];
  return (
    <Navbar
      sticky="top"
      variant={"dark"}
      bg="dark"
      className="my-md-4 sticky-top my-3"
      expand="lg"
    >
      <div className="container">
        <Navbar.Brand href="#services" className="ml-md-3">
          <img
            alt="logo"
            className="img-fluid bg-warning border rounded-circle mr-2"
            width="50"
            height="50"
            src="https://images.vexels.com/media/users/3/144355/isolated/preview/0a53cf7ef3dcdc995f7f20c13c697a25-speed-car-lines-logo-by-vexels.png"
          />
          <strong>Car Plus</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-center">
            {ROUTES.map((navItem) => (
              <Nav.Item key={navItem.path}>
                <Button
                  variant={"outline-warning"}
                  className="m-2 rounded-0"
                  onClick={() => history.push(navItem.path)}
                  active={
                    location.pathname === navItem.path ||
                    (navItem.altPaths &&
                      navItem.altPaths.includes(location.pathname))
                  }
                  id="navbutton"
                >
                  {navItem.name}
                </Button>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
