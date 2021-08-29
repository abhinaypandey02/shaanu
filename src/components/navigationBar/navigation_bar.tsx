import { Button, Nav, Navbar } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import "./navigation_bar.css";
import { useUser } from "../../contexts/user_context";
import ROUTES_META from "../../metadata/routes_meta";
import { useState } from "react";
import { useGlobalState } from "../../contexts/global_state";

export default function NavigationBar() {
  const history = useHistory();

  const location = useLocation();
  const [user] = useUser();
  const [expanded, setExpanded] = useState(false);
  let ROUTES: any[];
  const [{ cart }, dispatch] = useGlobalState();
  const isAdminPage = location.pathname.startsWith(ROUTES_META.admin);
  if (isAdminPage)
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
      {
        path: ROUTES_META.services + "/",
        name: `CART (${cart.length})`,
        button: true, //used to disable it being selected
      },
    ];

  function onBrandClick() {
    dispatch({ type: "CLEAR_SELECTION", payload: undefined });
    dispatch({ type: "CLEAR_CART", payload: undefined });
    history.push(ROUTES_META.services);
  }

  function back() {
    history.goBack();
  }

  function forward() {
    history.goForward();
  }

  return (
    <Navbar
      expanded={expanded}
      sticky="top"
      variant={"dark"}
      bg="dark"
      className="my-md-4 sticky-top my-3"
      expand="lg"
    >
      <div className="container">
        <Navbar.Brand onClick={onBrandClick} className="ml-md-3" href="#">
          <img
            alt="logo"
            className="img-fluid bg-warning border rounded-circle mr-2"
            width="50"
            height="50"
            src="https://images.vexels.com/media/users/3/144355/isolated/preview/0a53cf7ef3dcdc995f7f20c13c697a25-speed-car-lines-logo-by-vexels.png"
          />
          <strong>Car Plus</strong>
        </Navbar.Brand>
        <Nav className="ml-auto  d-sm-block d-md-none d-flex align-items-center flex-row justify-content-center">
          <Nav.Item className="d-flex align-items-center">
            <button className="btn btn-warning rounded-0" onClick={back}>
              <img
                src="https://icon-library.com/images/back-icon-png/back-icon-png-20.jpg"
                className="img-fluid"
                width={30}
              />
            </button>
          </Nav.Item>
          <Nav.Item className="d-flex  align-items-center">
            <button className="btn btn-warning rounded-0" onClick={forward}>
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_68746.png"
                className="img-fluid"
                width={30}
              />
            </button>
          </Nav.Item>
        </Nav>
        <Navbar.Toggle
          onClick={() => setExpanded((o) => !o)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-center">
            {ROUTES.map((navItem) => (
              <Nav.Item
                className="d-flex align-items-center"
                key={navItem.path}
              >
                <Button
                  variant={"outline-warning"}
                  className="m-2 rounded-0"
                  onClick={() => {
                    setExpanded(false);
                    history.push(navItem.path);
                  }}
                  active={
                    !navItem.button &&
                    (location.pathname === navItem.path ||
                      (navItem.altPaths &&
                        navItem.altPaths.includes(location.pathname)))
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
