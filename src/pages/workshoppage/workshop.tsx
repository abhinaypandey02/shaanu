import { Carousel, Modal } from "react-bootstrap"
import React, { useState } from "react"
import ReviewComponent from "../../components/reviews/reviewComponent"
import FAQComponent from "../../components/faqs/faqComponent"

interface WorkshopService {
    name: string;
    description: string;
    id: string;
    imageURLs: string[];
}

const services: WorkshopService[] = [
    {
        name: "Service 1",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        id: "service1",
        imageURLs: [
            "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        ]
    },
    {
        name: "Service 2",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        id: "service2",
        imageURLs: [
            "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        ]
    },
    {
        name: "Service 3",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        id: "service3",
        imageURLs: [
            "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        ]
    },
    {
        name: "Service 4",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        id: "service4",
        imageURLs: [
            "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        ]
    }
]

export default function WorkshopPage() {
    const [selectedService, setSelectedService] = useState<WorkshopService>()
    return (
        <div className="container-fluid m-0 p-0">
            <Modal
                centered
                contentClassName="full-services-modal-content"
                dialogClassName="full-services-modal-dialog "
                show={!!selectedService}
                onHide={() => setSelectedService(undefined)}
            >
                <Modal.Header closeButton>{selectedService?.name}</Modal.Header>
                <Modal.Body>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1447&q=80"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl
                                    consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
            <div className="container-fluid p-5 pb-5" id="allpagesection">
                <div className="row">
                    <div className="col-12 text-center text-light my-5">
                        <h1>OUR SERVICES</h1>
                    </div>
                </div>
                <div className="d-flex flex-wrap mb-5 justify-content-around ">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className=" col-md-5 mx-0 px-0"
                        >
                            <div className="pointer-on-hover card text-white border rounded-0 border-warning mb-3">
                                <img
                                    src={service.imageURLs[0]}
                                    className="img-fluid"
                                    alt="..."
                                />
                                <div className="card-body bg-warning text-dark">
                                    <h5 className="card-title">{service.name}</h5>
                                    <p className="card-text">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container-fluid py-5" id="section3">
                <div className="row-fluid text-light p-3 text-center">
                    <h1 className="text-warning">CUSTOMER REVIEWS</h1>
                </div>
                <ReviewComponent reviews={null} />
                <div className="col text-center my-3">
                    <a href="#customerreviews" className="m-2 btn btn-light">
                        WRITE A REVIEW
                    </a>
                    <a href="#customerreviews" className="m-2 btn btn-outline-light">
                        READ MORE
                    </a>
                </div>

                <br />
                <div className="row-fluid text-light p-3 text-center">
                    <h1>FAQ</h1>
                </div>
                <div className="container">
                    <div className="row-fluid text-light">
                        <FAQComponent answersClass="text-light" firstAlternatingCardHeaderClass="bg-warning text-dark"
                                      secondAlternatingCardHeaderClass="bg-dark text-warning" />
                        <div className="col text-center my-3">
                            <a href="#faq" className="btn btn-outline-light">
                                READ MORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
