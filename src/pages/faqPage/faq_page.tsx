import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Accordion, Card, Carousel } from "react-bootstrap";

export default function FaqPage(){
    return(
        <div className="container-fluid">
            <div className="row-fluid text-light p-3 text-center">
                <h1>
                CUSTOMER REVIEWS
                </h1>
            </div>
            <div className="container-fluid text-light pt-5 p-3" id='section4'>
            <div className="container pt-5">
                <ScrollAnimation animateIn='fadeInDown' animateOnce={true} duration={3}>
                    <div className="row mr-auto">
                        <hr className='bg-light py-1 mx-2' style={{width: 30}}/>
                        <p className='my-auto text-light'><strong>FAQ</strong></p>


                    </div>
                    <h1 className='text-dark mb-5'>
                        Commonly Asked Questions
                    </h1>
                </ScrollAnimation>
            </div>


            <div className="container bg-transparent">
                <div className="row-fluid text-light">
                    <Accordion defaultActiveKey="1">
                        <Card className='p-0 m-0'>
                            <Card.Header className='bg-dark text-light pointer-on-hover p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                1. In a car servicing, what engine oil do you use?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="1">
                                <Card.Body className='text-dark'>
                                    We use Mobil 5W-30 Engine oil in our car service center, which improves engine productivity and effectiveness while also offering superior protection against wear and tear, extending the life of your automobile engine.
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark pointer-on-hover p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                2. What kind of spare parts are used for my car?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="2">
                                <Card.Body className='text-dark'>Reliable spares and consumables are guaranteed 100%. Because of our unified spare sourcing and comprehensive inventory management, we are able to obtain high-quality OEM and OES spares, guaranteeing that only the finest parts get into your vehicle.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light pointer-on-hover p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    3. How long will it take for my car to be serviced?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="3">
                                <Card.Body className='text-dark'>The servicing time for your vehicle is determined mostly on service package and car detailing. A regular service will take 4-5 hours, while a complete service will take at least 5-6 hours.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark pointer-on-hover p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                4.      Is it necessary for me to drop off my car at the workshop for the auto service?

                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="4">
                                <Card.Body className='text-dark'>No, not at all. With our FREE pick-up and drop-off service for your car anywhere in your city, we provide a hassle-free and seamless car repair service experience.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                5.      What if I have a problem after my automobile has been serviced?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="5">
                                <Card.Body className='text-dark'>Once you arrange a car service, you get a one-month/1000-kilometer unconditional warranty on the service. Furthermore, our proactive customer assistance is available 24 hours a day, 7 days a week.
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                6.     In Noida , how many PoorviAutoworks vehicle servicing centres are there?

                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="6">
                                <Card.Body className='text-dark'>We have more than 70 + industry standard car repair services centres offering a variety of car services at prime locations across Noida . You can also opt for our doorstep pickup service absolutely free of cost
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                7.    What sets PoorviAutoworks apart from other auto service companies in Noida ?

                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="7">
                                <Card.Body className='text-dark'>PoorviAutoworks is a multi-brand car servicing network with many sites in Noida . We provide the best vehicle services and car detailing at reasonable costs. Not only do you have a wide range of vehicle services to pick from, but you also save up to 40% on car service when compared to what is paid at authorised service centres for stop and start.
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="8">
                                8.      How is PoorviAutoworks able to give a 40% discount on my automobile service?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="8">
                                <Card.Body className='text-dark'>Because of our unique business strategy, we are able to deliver the best and most economical vehicle services.If you are searching for the best car service center near me, where to look. We accomplish labour cost reductions, centralised bulk purchase of spare components, no real-estate overheads, and expert high performance, all of which are passed directly to you, the client. 
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="9">
                                9.    How can I schedule a car service with PoorviAutoworks in Noida ?

                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="9">
                                <Card.Body className='text-dark'>Your call service is only around the corner from your Noida address. Book immediately through our website or through the PoorviAutoworks Android app. Do you want to have a more human experience? Please contact us via WhatsApp at **********.
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="10">
                                10.    Do you provide a warranty on my Noida vehicle service?


                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="10">
                                <Card.Body className='text-dark'>
                                Yes, you receive an unconditional 1000km/1month network warranty on auto repairs and services redeemable anywhere in Noida . There are no questions!
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="11">
                                11.      What if I am unable to drop off my vehicle at the workshop?


                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="11">
                                <Card.Body className='text-dark'>
                                Don't be concerned! Everything will be taken care of by us. We provide FREE door-to-door pickup and drop-off services in Noida .
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                      

                    </Accordion>

                </div>
            </div>
        </div>

        </div>
    );
}