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
                                    1. Lorem Ipsum is simpl typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="1">
                                <Card.Body className='text-dark'>Lorem Ipsum ied it to make a tronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark pointer-on-hover p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    2. Lorem Ipsum is simply dummy teddddasdsadadting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="2">
                                <Card.Body className='text-dark'>Lorem Ipsum is simply duso the leap ie 1960s with the
                                    release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light pointer-on-hover p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    4. Lorem Ipsprinting and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="3">
                                <Card.Body className='text-dark'>Lorem Ipsum is simplyext ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark pointer-on-hover p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    3. Lorem Ipsum is simply ddwadadadadaddummy text of the printing and typesetting
                                    industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="4">
                                <Card.Body className='text-dark'>Lorem Ipsum is se the 1500s, when ved not only five
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                    5. Lorem Ipsum is simply and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="5">
                                <Card.Body className='text-dark'>Lorem Ipsum is simply dummy text of the p galley oe
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                    5. Lorem Ipsum is simply and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="6">
                                <Card.Body className='text-dark'>Lorem Ipsum is simply dummy text of the p galley oe
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                    5. Lorem Ipsum is simply and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="7">
                                <Card.Body className='text-dark'>Lorem Ipsum is simply dummy text of the p galley oe
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="8">
                                    5. Lorem Ipsum is simply and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="8">
                                <Card.Body className='text-dark'>Lorem Ipsum is simply dummy text of the p galley oe
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light pointer-on-hover  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="9">
                                    5. Lorem Ipsum is simply and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="9">
                                <Card.Body className='text-dark'>Lorem Ipsum is simply dummy text of the p galley oe
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                    </Accordion>

                </div>
            </div>
        </div>

        </div>
    );
}