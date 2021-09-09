import React, { useState } from "react"
import { Accordion, Button, Card, Modal } from "react-bootstrap"
import CarsMenu from "../../components/carsMenu/cars_menu"
import { useGlobalState } from "../../contexts/global_state"
import "./landing_page.css"
import "animate.css/animate.min.css"
import CountUp from "react-countup"
import ScrollAnimation from "react-animate-on-scroll"
import VisibilitySensor from "react-visibility-sensor"
import landingPageServices from "../../database/landingPageServices.json"
import ReviewComponent from "../../components/reviews/reviewComponent"
import ReactMarkdown from "react-markdown"
import FAQComponent from "../../components/faqs/faqComponent"

interface Service {
    title: string;
    content: string;
    subtitle: string;
    imageURL: string;
}

function ServiceContent({ service }: { service: Service }) {
    return <ReactMarkdown>{service.content}</ReactMarkdown>
}

export default function LandingPage() {
    const [globalState, dispatch] = useGlobalState()
    let currentlySelecting: string
    const SERVICES: Service[] = landingPageServices.services
    const [selectedService, setSelectedService] = useState<Service>()
    if (!globalState.selectedBrand) currentlySelecting = "BRAND"
    else if (!globalState.selectedModel) currentlySelecting = "MODEL"
    else currentlySelecting = "FUEL"

    function onBack(e: any) {
        e.stopPropagation()
        if (currentlySelecting === "MODEL")
            dispatch({ type: "SET_BRAND", payload: null })
        else dispatch({ type: "SET_MODEL", payload: null })
    }

    return (
        <div>
            <Modal
                contentClassName=" overflow-auto full-modal-content border border-dark rounded-0 bg-dark text-light"
                dialogClassName="full-modal-dialog "
                centered
                show={!!selectedService}
                onHide={() => setSelectedService(undefined)}
            >
                <Modal.Header
                    closeButton
                    className="bg-warning text-dark rounded-0 overflow-auto"
                >
                    {selectedService?.title}
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid overflow-auto">
                        <div className="row">
                            <div className="col-md-4 p-3 d-flex justify-content-center align-items-start">
                                <img
                                    src={selectedService?.imageURL}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-md-8">
                                <h1 className="font-weight-bold">{selectedService?.title}</h1>
                                <p className="text-wrap">

                                    {selectedService && (
                                        <ServiceContent service={selectedService} />
                                    )}
                                    <div className="col my-3">
                                        <a href="#blogs" className="btn btn-outline-light">
                                            READ MORE
                                        </a>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
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
                        {SERVICES.map((service, index) => (
                            <div
                                key={index}
                                className="col-md-4 pointer-on-hover"
                                onClick={() => setSelectedService(service)}
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
                                        <img
                                            src={service.imageURL}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-warning">
                                                {service.title}
                                            </h5>
                                            <p className="card-text">{service.subtitle}</p>
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
                                <CountUp start={0} end={28} duration={5} redraw={true}>
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
                                <CountUp start={0} end={57} duration={5} redraw={true}>
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
                                <CountUp start={0} end={1029} duration={5} redraw={true}>
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
                        <FAQComponent answersClass="text-dark" firstAlternatingCardHeaderClass="bg-dark text-light"
                                      secondAlternatingCardHeaderClass="bg-light text-dark" />
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
