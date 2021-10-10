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
        name: "The A Team",
        description:
            "Meet the team behind Poorvi Autmobiles.",
        id: "service1",
        imageURLs: [
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20A%20team/IMG_6068.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20A%20team/IMG_6072.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20A%20team/IMG_6268.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20A%20team/IMG_6273.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20A%20team/IMG_6274.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20A%20team/IMG_6283.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20A%20team/IMG_6286.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20A%20team/IMG_6290.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20A%20team/IMG_6293.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20A%20team/Marielle%20Price.png?raw=true",
        ]
    },
    {
        name: "The Big Place",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        id: "service2",
        imageURLs: [
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20Big%20Place/IMG_6073.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20Big%20Place/IMG_6303.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20Big%20Place/IMG_6343.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20Big%20Place/IMG_6344.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20Big%20Place/IMG_6292.jpg?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20Big%20Place/IMG_6341.jpg?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20Big%20Place/IMG_6387.jpg?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/The%20Big%20Place/IMG_6388.jpg?raw=true",
        ]
    },
    {
        name: "Products we use",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        id: "service3",
        imageURLs: [
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/products%20we%20use/IMG_6352.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/products%20we%20use/IMG_6353.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/products%20we%20use/IMG_6357.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/products%20we%20use/IMG_6358.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/products%20we%20use/IMG_6359.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/products%20we%20use/IMG_6360.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/products%20we%20use/IMG_6361.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/products%20we%20use/IMG_6362.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/products%20we%20use/IMG_6364.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/products%20we%20use/IMG_6367.JPG?raw=true",
        ]
    },
    {
        name: "Repair Shop",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        id: "service4",
        imageURLs: [
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6031.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6055.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6062.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6064.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6082.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6084.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6086.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6087.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6088.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6099.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6101.JPG?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6266.jpg?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6280.jpg?raw=true",
            "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/repair%20shop/IMG_6349.jpg?raw=true",



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
                <Modal.Header className='bg-dark text-warning rounded-0' closeButton>{selectedService?.name}</Modal.Header>
                <Modal.Body className='bg-dark text-warning rounded-0' >
                    <Carousel>
                        {selectedService?.imageURLs.map(url=>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={url}
                                    alt="Service"
                    
                                />
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
                                    src={service.imageURLs[0]}
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
