import { Button, Dropdown, Nav, Navbar } from "react-bootstrap"
import { Link, useHistory, useLocation } from "react-router-dom"
import "./navigation_bar.css"
import { useUser } from "../../contexts/user_context"
import ROUTES_META from "../../metadata/routes_meta"
import { useState } from "react"
import { useGlobalState } from "../../contexts/global_state"
import { signOut } from "../../utils/firebase/auth"

export default function NavigationBar() {
    const history = useHistory()

    const location = useLocation()
    const [user] = useUser()
    const [expanded, setExpanded] = useState(false)
    let ROUTES: any[]
    const [{ cart }, dispatch] = useGlobalState()
    const isAdminPage = location.pathname.startsWith(ROUTES_META.admin)
    if (isAdminPage)
        ROUTES = [
            {
                path: ROUTES_META.admin + ROUTES_META.adminJobs,
                altPaths: [ROUTES_META.admin + ROUTES_META.adminAddJob],
                name: "JOBS"
            },
            {
                path: ROUTES_META.admin + ROUTES_META.adminUsers,
                name: "USERS"
            },
            {
                path: ROUTES_META.admin + ROUTES_META.adminCallback,
                name: "CALLBACK REQS"
            },
            {
                path: ROUTES_META.admin + ROUTES_META.adminBooked,
                name: "BOOKED SESSIONS"
            },
            {
                path: ROUTES_META.admin + ROUTES_META.adminCheckouts,
                name: "CHECKOUTS"
            }
        ]
    else
        ROUTES = [
            {
                path: ROUTES_META.services,
                name: "BOOK SERVICES"
            },
            {
                path: ROUTES_META.freeServices,
                name: "100% FREE"
            },
            {
                path: ROUTES_META.workShop,
                name: "VIEW WORKSHOP"
            },
            {
                path: ROUTES_META.services + "/",
                name: `CART (${cart.length})`,
                button: true, //used to disable it being selected
                onClick:()=>{
                    if(user){
                        if(user.carProfiles.length>0){
                            const carProfile=user.carProfiles[0];
                            if( carProfile.brand ) dispatch({type:"SET_BRAND",payload:carProfile.brand})
                            if( carProfile.model ) dispatch({type:"SET_MODEL",payload:carProfile.model})
                            if( carProfile.fuel ) dispatch({type:"SET_TYPE",payload:carProfile.fuel})

                        }
                    }
                }
            }
        ]

    function onBrandClick() {
        dispatch({ type: "CLEAR_SELECTION", payload: undefined })
        dispatch({ type: "CLEAR_CART", payload: undefined })
        history.push(ROUTES_META.services)
    }

    function back() {

        history.goBack()
    }

    function forward() {
        history.goForward()
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
                <Navbar.Brand onClick={onBrandClick} className="ml-md-3">
                    <img
                        alt="logo"
                        className="img-fluid bg-warning border rounded-circle mr-2"
                        width="50"
                        height="50"
                        src="https://images.vexels.com/media/users/3/144355/isolated/preview/0a53cf7ef3dcdc995f7f20c13c697a25-speed-car-lines-logo-by-vexels.png"
                    />
                    <strong>Noida Workshop</strong>
                </Navbar.Brand>
                <Nav
                    className="ml-auto  d-sm-block d-md-none d-flex align-items-center flex-row justify-content-center">
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
                                        setExpanded(false)
                                        if(navItem.onClick) navItem.onClick();
                                        history.push(navItem.path)
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
                <Nav className="m-2 p-0 d-flex align-items-center justify-content-center">
                    <Nav.Item className="m-0 d-flex align-items-center">
                        <Dropdown
                        >
                            <Dropdown.Toggle variant={"warning"} className="rounded-0">
                                <img
                                    src="https://image.flaticon.com/icons/png/512/1946/1946429.png"
                                    className="img-fluid"
                                    width={30}
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="rounded-0 bg-dark text-warning w-25">
                                {!user && (
                                    <Dropdown.Item
                                        as={Link}
                                        className="dropdown-item text-warning"
                                        to={ROUTES_META.logIn}
                                    >
                                        LOG IN
                                    </Dropdown.Item>
                                )}
                                {!user && (
                                    <Dropdown.Item
                                        as={Link}
                                        className="dropdown-item text-warning"
                                        to={ROUTES_META.signUp}
                                    >
                                        SIGN UP
                                    </Dropdown.Item>
                                )}
                                {user && (
                                    <Dropdown.Item
                                        as={Link}
                                        className="dropdown-item text-warning"
                                        to={ROUTES_META.profile}
                                    >
                                        CAR PROFILE
                                    </Dropdown.Item>
                                )}
                                {user && (
                                    <Dropdown.Item
                                        as={Link}
                                        onClick={signOut}
                                        className="dropdown-item text-warning"
                                        to={ROUTES_META.services}
                                    >
                                        SIGN OUT
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>
    )
}
