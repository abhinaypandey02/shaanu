import { Carousel, Modal } from "react-bootstrap"
import React, { useState } from "react"
import ReviewComponent from "../../components/reviews/reviewComponent"
import FAQComponent from "../../components/faqs/faqComponent"
import servicesJSON from "../../database/workshopServices.json";
import { Link } from "react-router-dom";
interface WorkshopService {
    name: string;
    description: string;
    id: string;
    images: { title:string, description:string, imageURL:string }[];
}

const services: WorkshopService[] = servicesJSON.services;
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
                <Modal.Header className='bg-dark text-warning rounded-0' closeButton>{selectedService?.name}</Modal.Header>
                <Modal.Body className='bg-dark text-warning rounded-0' >
                    <Carousel>
                        {selectedService?.images.map(image=>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image.imageURL}
                                    alt="Service"
                    
                                />
                                <Carousel.Caption>
                                   <h3>{image.title}</h3>
                                   <p>{image.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )}

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
                                    src={service.images[0].imageURL}
                                    className="img-fluid"
                                    alt="..."
                                    height={300}
                                />
                                <div className="card-body bg-warning text-dark" style={{minHeight:150}} >
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
                    <Link to="/customerreviews" className="m-2 btn btn-light">
                        WRITE A REVIEW
                    </Link>
                    <Link to="/customerreviews" className="m-2 btn btn-outline-light">
                        READ MORE
                    </Link>
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
                            <Link to="/faq" className="btn btn-outline-light">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
