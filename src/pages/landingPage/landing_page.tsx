import React, {useState} from 'react';
import {Accordion, Card, Carousel, Modal} from 'react-bootstrap';
import CarsMenu from '../../components/carsMenu/cars_menu';
import {useGlobalState} from '../../contexts/global_state';
import './landing_page.css';
import "animate.css/animate.min.css";
import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import landingPageServices from '../../database/landingPageServices.json';


interface Service{
    title:string;
    content:string;
    subtitle:string;
    imageURL:string;

}

function ServiceContent({service}:{service:Service}){
    return <div>
        {service.content}
    </div>
}

export default function LandingPage() {
    const [globalState] = useGlobalState();
    let currentlySelecting;
    const SERVICES:Service[]=landingPageServices.services;
    const [selectedService,setSelectedService]=useState<Service>();

    if (!globalState.selectedBrand) currentlySelecting = "BRAND";
    else if (!globalState.selectedModel) currentlySelecting = "MODEL";
    else currentlySelecting = "FUEL"

    return <div>
        <Modal contentClassName=" overflow-auto full-modal-content border border-dark rounded-0 bg-dark text-light" dialogClassName="full-modal-dialog " centered show={!!selectedService} onHide={()=>setSelectedService(undefined)}>
            <Modal.Header closeButton className='bg-warning rounded-0 overflow-auto'>
                {selectedService?.title}
            </Modal.Header>
            <Modal.Body>
                <div className="container-fluid overflow-auto">
                    <div className="row">
                        <div className="col-md-4 p-3 d-flex justify-content-center align-items-center bg-warning">
                            <img src='https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                            className='img-fluid'/>
                        </div>
                        <div className="col-md-8">
                            <h1 className='font-weight-bold'>{selectedService?.title}</h1>
                            <p className='text-wrap'>
                                dddddddddd Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto assumenda minus deserunt quia fugiat odio incidunt voluptatem maiores hic totam ipsum accusamus ex natus error, soluta amet qui praesentium earum!
                                {selectedService&&<ServiceContent service={selectedService}/>}

                                <div className="col my-3">
                                    <a href='#blogs' className='btn btn-outline-light' >READ MORE</a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        <div className='d-flex justify-content-center align-items-center' id='section1'>
            <div className='container d-flex flex-column'>
                <div className="row-fluid text-light text-center">
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true} initiallyVisible={true} duration={3}>
                        <h1 className='display-5'>One place for all your Car needs</h1>
                    </ScrollAnimation>

                </div>
                <br/>

                <div className='row my-2 text-center'>
                    <Accordion className='w-50 mx-auto border border-warning text-light' id='dropdownbutton'>
                        <Card className='m-0 pointer-on-hover'>
                            <Card.Header className='p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    SELECT {currentlySelecting}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='text-light' eventKey="0">
                                <Card.Body><CarsMenu/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </div>

            </div>
        </div>


        <div className='container-fluid py-4 d-flex align-items-center justify-content-center' id='section2'>
            <div className="container px-2 ">
                <div className="row-fluid text-light text-left">
                    <ScrollAnimation animateIn='fadeInDown' animateOnce={true} duration={3}>
                        <div className="row mr-auto">
                            <hr className='bg-light py-1  mx-2' style={{width: 30}}/>
                            <p className='my-auto text-light'><strong>Top Services</strong></p>

                        </div>

                        <h1 className='display-5 '>Services that make your car perfect.</h1>
                    </ScrollAnimation>
                </div>
                <br/>
                <div className="d-flex flex-wrap mt-4">
                    {SERVICES.map((service,index)=><div className="col-md-4 pointer-on-hover" onClick={()=>setSelectedService(service)}>
                        <ScrollAnimation animateIn='fadeInUp' delay={index*500} animateOnce={true} duration={3}>
                            <div className="card mx-auto pointer-on-hover servicecard" style={{width: 350}}>
                                <img
                                    src={service.imageURL}
                                    className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">{service.title}</h5>
                                    <p className="card-text">{service.subtitle}</p>

                                </div>
                            </div>
                        </ScrollAnimation>

                    </div>)}
                </div>
            </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>
        <div className="container-fluid mb-5" id='section3'>

            <div className="container">
                <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={3}>
                    <div className="row mr-auto">
                        <hr className='bg-light py-1 mx-2' style={{width: 30}}/>
                        <p className='my-auto text-light'><strong>Customer Reviews</strong></p>


                    </div>
                    <h1 className='text-warning mb-5'>
                        Hear it from them.
                    </h1>
                </ScrollAnimation>

                <br/>
                <Carousel>
                    {[{
                        name: "Abhinay Pandey",
                        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        designation: "Web Developer",
                        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },{
                        name: "Abhinay Pandey",
                        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        designation: "Web Developer",
                        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },{
                        name: "Abhinay Pandey",
                        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        designation: "Web Developer",
                        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },].map(ele => <Carousel.Item>
                        <div className="card mx-auto text-light rounded-0 p-3" style={{ maxWidth: 1000 }} >
                            <div className="row d-flex align-items-center justify-content-center">

                                <div className="col-md-4 d-flex align-items-center justify-content-center flex-column mx-auto">

                                    <img src={ele.image} className='img-fluid border w-50 rounded-circle' alt="..." />
                                    <br/>
                                    <h5 className="card-title text-warning">
                                        <strong >{ele.name}</strong>
                                    </h5>
                                    <p className="card-text">{ele.designation}</p>




                                </div>
                                <div className="row text-center text-wrap p-3">
                                    <div className="col-12 mb-4">
                                        <img src="https://i.imgur.com/csn3MwK.png" className='img-fluid ' width={250} alt="..." />

                                    </div>

                                    <div className="col-12">
                                        {ele.review}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>)}
                </Carousel>
            </div>
            <div className="col text-center my-3">
                    <a href='#customerreviews' className='btn btn-outline-light' >READ MORE</a>
                    </div>
        </div>

        <div className="container-fluid" id='countupsection'>

            <div className="container py-5">
                <div className="row text-light py-5">
                    <div className="col-md-3 text-center">
                        <p className='font-weight-bold display-3 mt-3'>
                            <CountUp start={0} end={20} duration={5} redraw={true}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className='font-weight-bold  mt-3'><h5>SERVICES</h5></p>
                    </div>
                    <div className="col-md-3 text-center">
                        <p className='font-weight-bold display-3 mt-3'>
                            <CountUp start={0} end={1200} duration={5} redraw={true}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className='font-weight-bold  mt-3'><h5>USERS</h5></p>
                    </div>
                    <div className="col-md-3 text-center">
                        <p className='font-weight-bold display-3 mt-3'>
                            <CountUp start={0} end={900} duration={5} redraw={true}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className='font-weight-bold  mt-3'><h5>CARS</h5></p>
                    </div>
                    <div className="col-md-3 text-center">
                        <p className='font-weight-bold display-3 mt-3'>
                            <CountUp start={0} end={30} duration={5} redraw={true}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className='font-weight-bold  mt-3'><h5>STATES</h5></p>
                    </div>
                </div>
            </div>
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

                    </Accordion>
                    <div className="col text-center my-3">
                    <a href='#faq' className='btn btn-outline-dark' >READ MORE</a>
                    </div>
                    

                </div>
            </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" id="lastsvg" viewBox="0 0 1440 320">
            <path fill="#000000" fill-opacity="1"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>


    </div>
}