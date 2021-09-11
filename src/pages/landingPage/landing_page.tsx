import React from "react"
import { Accordion, Button, Card } from "react-bootstrap"
import CarsMenu from "../../components/carsMenu/cars_menu"
import { useGlobalState } from "../../contexts/global_state"
import "./landing_page.css"
import "animate.css/animate.min.css"
import CountUp from "react-countup"
import ScrollAnimation from "react-animate-on-scroll"
import VisibilitySensor from "react-visibility-sensor"
import ReviewComponent from "../../components/reviews/reviewComponent"
import Blog from "../../interfaces/blog"
import blogsJSON from "../../database/blogs.json"
import { useHistory } from "react-router"
import { relative } from "path"

export default function LandingPage() {
    const [globalState, dispatch] = useGlobalState()
    let currentlySelecting: string
    const SERVICES: Blog[] = blogsJSON.blogs.filter(blog => blog.page === "home")
    if (!globalState.selectedBrand) currentlySelecting = "BRAND"
    else if (!globalState.selectedModel) currentlySelecting = "MODEL"
    else currentlySelecting = "FUEL"
    const his = useHistory()

    function onBack(e: any) {
        e.stopPropagation()
        if (currentlySelecting === "MODEL")
            dispatch({ type: "SET_BRAND", payload: null })
        else dispatch({ type: "SET_MODEL", payload: null })
    }

    return (
        <div>
            <div
                className="d-flex justify-content-center align-items-center"
                id="section1"
            >
                <div className="container d-flex flex-column">
                    <div className="row-fluid text-light text-center">
                        <ScrollAnimation
                            animateIn="fadeIn"
                            animateOnce={true}
                            initiallyVisible={true}
                            duration={3}
                        >
                            <h1 className="display-5">One place for all your Car needs</h1>
                        </ScrollAnimation>
                    </div>
                    <br />

                    <div className="row my-2 text-center">
                        <Accordion
                            className="w-50 mx-auto border border-warning text-light"
                            id="dropdownbutton"
                        >
                            <Card className="m-0 pointer-on-hover">
                                <Card.Header className="p-0 m-0">
                                    <Accordion.Toggle
                                        className="zIndex0 d-flex justify-content-center align-items-center position-relative"
                                        as={Card.Header}
                                        eventKey="0"
                                    >
                                        {currentlySelecting !== "BRAND" && (
                                            <Button
                                                onClick={onBack}
                                                style={{ left: 10 }}
                                                className=" zIndex1 rounded-0 position-absolute"
                                                variant="warning"
                                            >
                                                BACK
                                            </Button>
                                        )}
                                        <span className="">SELECT {currentlySelecting}</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="text-light" eventKey="0">
                                    <Card.Body>
                                        <CarsMenu />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </div>
            </div>

            <div
                className="container-fluid py-4 d-flex align-items-center justify-content-center"
                id="section2"
            >
                <div className="container px-2 ">
                    <div className="row-fluid text-light text-left">
                        <ScrollAnimation
                            animateIn="fadeInDown"
                            animateOnce={true}
                            duration={3}
                        >
                            <div className="row mr-auto">
                                <hr className="bg-light py-1  mx-2" style={{ width: 30 }} />
                                <p className="my-auto text-light">
                                    <strong>Top Services</strong>
                                </p>
                            </div>

                            <h1 className="display-5 ">
                                Services that make your car perfect.
                            </h1>
                        </ScrollAnimation>
                    </div>
                    <br />
                    <div className="d-flex flex-wrap mt-4">
                        {SERVICES.map((blog, index) => (
                            <div
                                key={index}
                                className="col-lg-4 pointer-on-hover"
                                onClick={() => his.push("/blog/" + blog.slug)}
                            >
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    delay={index * 500}
                                    animateOnce={true}
                                    duration={3}
                                >
                                    <div
                                        className="card mx-auto pointer-on-hover servicecard"
                                        style={{ width: 350 }}
                                    >
                                           
                                                <div className=" imagecontainer">
                                                    <img
                                                        src={blog.imageURL}
                                                        className="img-fluid"
                                                        alt="..."
                                                    />
                                                </div>
                                                    <div className="card-body d-flex align-items-end">
                                                        <div className=''>
                                                        <h5 className="card-title text-warning">
                                                            {blog.title}
                                                        </h5>
                                                        <p className="card-text">{blog.subtitle}</p>
                                                        </div>
                                                    </div>
                                           
                                    </div>
                                </ScrollAnimation>
                            </div>
                        ))}

                        <div className="col text-center my-3">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={1500}
                                animateOnce={true}
                                duration={3}
                            >
                                <a href="#blogs" className=" btn btn-dark rounded-0">
                                    READ MORE
                                </a>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#000000"
                    fillOpacity="1"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>
            <div className="container-fluid mb-5" id="section3">
                <div className="container">
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={3}>
                        <div className="row mr-auto">
                            <hr className="bg-light py-1 mx-2" style={{ width: 30 }} />
                            <p className="my-auto text-light">
                                <strong>Customer Reviews</strong>
                            </p>
                        </div>
                        <h1 className="text-warning mb-5">Hear it from them.</h1>
                    </ScrollAnimation>

                    <br />
                    <ReviewComponent reviews={null} />
                </div>
                <div className="col text-center my-3">
                    <a href="#customerreviews" className="m-2 btn btn-light">
                        WRITE A REVIEW
                    </a>
                    <a href="#customerreviews" className="m-2 btn btn-outline-light">
                        READ MORE
                    </a>
                </div>
            </div>

            <div className="container-fluid" id="countupsection">
                <div className="container py-5">
                    <div className="row text-light py-5">
                        <div className="col-md-3 text-center">
                            <p className="font-weight-bold display-3 mt-3">
                                <CountUp start={0} end={32} duration={5} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </p>
                            <p className="font-weight-bold  mt-3">
                                <h5>SERVICES</h5>
                            </p>
                        </div>
                        <div className="col-md-3 text-center">
                            <p className="font-weight-bold display-3 mt-3">
                                <CountUp start={0} end={764} duration={5} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </p>
                            <p className="font-weight-bold  mt-3">
                                <h5>USERS</h5>
                            </p>
                        </div>
                        <div className="col-md-3 text-center">
                            <p className="font-weight-bold display-3 mt-3">
                                <CountUp start={0} end={12467} duration={5} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </p>
                            <p className="font-weight-bold  mt-3">
                                <h5>CARS</h5>
                            </p>
                        </div>
                        <div className="col-md-3 text-center">
                            <p className="font-weight-bold display-3 mt-3">
                                <CountUp start={0} end={3} duration={5} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </p>
                            <p className="font-weight-bold  mt-3">
                                <h5>STATES</h5>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-light pt-5 p-3" id="section4">
                <div className="container pt-5">
                    <ScrollAnimation
                        animateIn="fadeInDown"
                        animateOnce={true}
                        duration={3}
                    >
                        <div className="row mr-auto">
                            <hr className="bg-light py-1 mx-2" style={{ width: 30 }} />
                            <p className="my-auto text-light">
                                <strong>FAQ</strong>
                            </p>
                        </div>
                        <h1 className="text-dark mb-5">Commonly Asked Questions</h1>
                    </ScrollAnimation>
                </div>

                <div className="container bg-transparent">
                    <div className="row-fluid text-light">
                        <Accordion defaultActiveKey="1">
                            <Card className="p-0 m-0">
                                <Card.Header className="bg-dark text-light pointer-on-hover p-0 m-0">
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        1. In a car servicing, what engine oil do you use?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="border border-light" eventKey="1">
                                    <Card.Body className="text-dark">
                                        We use Mobil 5W-30 Engine oil in our car service center, which improves engine
                                        productivity and effectiveness while also offering superior protection against
                                        wear and tear, extending the life of your automobile engine.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className=" p-0 m-0">
                                <Card.Header className="bg-light text-dark pointer-on-hover p-0 m-0">
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        2. What kind of spare parts are used for my car?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="border border-light" eventKey="2">
                                    <Card.Body className="text-dark">Reliable spares and consumables are guaranteed
                                        100%. Because of our unified spare sourcing and comprehensive inventory
                                        management, we are able to obtain high-quality OEM and OES spares, guaranteeing
                                        that only the finest parts get into your vehicle.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className=" p-0 m-0">
                                <Card.Header className="bg-dark text-light pointer-on-hover p-0 m-0">
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        3. How long will it take for my car to be serviced?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="border border-light" eventKey="3">
                                    <Card.Body className="text-dark">The servicing time for your vehicle is determined
                                        mostly on service package and car detailing. A regular service will take 4-5
                                        hours, while a complete service will take at least 5-6 hours.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className=" p-0 m-0">
                                <Card.Header className="bg-light text-dark pointer-on-hover p-0 m-0">
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        4. Is it necessary for me to drop off my car at the workshop for the auto
                                        service?

                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="border border-light" eventKey="4">
                                    <Card.Body className="text-dark">No, not at all. With our FREE pick-up and drop-off
                                        service for your car anywhere in your city, we provide a hassle-free and
                                        seamless car repair service experience.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <div className="col text-center my-3">
                            <a href="#faq" className="btn btn-outline-dark">
                                READ MORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="lastsvg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#000000"
                    fillOpacity="1"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    )
}
