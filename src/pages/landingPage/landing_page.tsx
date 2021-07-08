import React from 'react';
import { Accordion, Card, Carousel } from 'react-bootstrap';
import CarsMenu from '../../components/carsMenu/cars_menu';
import { useGlobalState } from '../../contexts/global_state';
import './landing_page.css';

export default function LandingPage() {
    const [globalState]=useGlobalState();
    let currentlySelecting;

    if(!globalState.selectedBrand) currentlySelecting="BRAND";
    else if(!globalState.selectedModel) currentlySelecting="MODEL";
    else currentlySelecting="FUEL"

    return <div>
  
            <div className='d-flex justify-content-center align-items-center' id='section1'>
                <div className='container d-flex flex-column'>
                        <div className="row-fluid text-light text-center">
                            <h1 className='display-5'>One place for all your Car needs</h1>
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
            <div className="container p-2 ">
            <div className="row-fluid text-light text-center">
                <h1 className='display-5 '>Services that make your car perfect.</h1>
            </div>
            <br/>
            <div className="row mt-4">
                <div className="col-md-4">
                    
                    <div className="card mx-auto" style={{width: 300}} id='servicecard'>
                    <img src="https://storage.googleapis.com/gomechanic_assets/category_icons/battery-v3.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-warning">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                
                    <div className="card mx-auto" style={{width: 300}} id='servicecard'>
                    <img src="https://storage.googleapis.com/gomechanic_assets/category_icons/schedule-services-v3.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-warning">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                    </div>
                  
                </div>
                <div className="col-md-4">
                    <div className="card mx-auto" style={{width: 300}} id='servicecard'>
                    <img src="https://storage.googleapis.com/gomechanic_assets/category_icons/tyre-v3.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-warning">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   
                    </div>
                    </div>
                </div>
                     
            </div>
            </div>
        </div>

        <div className="container-fluid p-5" id='section3' >
            <div className="row-fluid text-light p-3 text-center">
                <h1 className='text-warning'>
                CUSTOMER REVIEWS
                </h1>
            </div>
                            <Carousel fade>
                            <Carousel.Item>
                                        <div className="card mx-auto text-light border-light rounded-3 p-3 bg-warning" style={{ maxWidth: 1000 }} >
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-2 my-auto">
                                                    <img src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className='img-fluid border rounded-circle' alt="..." />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body ">
                                                        <h5 className="card-title text-warning"><strong>User Name</strong></h5>
                                                        <p className="card-text">This is a wider card with supal content. This content is a little bit longer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row text-center text-wrap p-3">
                                                <div className="col ">
                                            Lorem Ipsum is simply dummy text of thext ap into electronic typeset960s with the release of Letraset shdus Lorem Ipsum.
                                            </div>
                                            </div>
                                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card mx-auto text-light border-light p-3" style={{ maxWidth: 1000 }} >
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-2 my-auto">
                                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className='img-fluid border rounded-circle' alt="..." />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <h5 className="card-title"><strong>User Name</strong></h5>
                                                        <p className="card-text">This t below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row text-center text-wrap p-3">
                                                <div className="col">
                                            Lorem Ipsum is simply dummy t. Lorem Ipsum has been type specimen book. It has survived not only five centuries, bing essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </div>
                                            </div>
                                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card mx-auto text-light border-light p-3" style={{ maxWidth: 1000 }} >
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-2 my-auto">
                                                    <img src="https://images.unsplash.com/photo-1481114070102-72f9d11057dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80" className='img-fluid border rounded-circle' alt="..." />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <h5 className="card-title"><strong>User Name</strong></h5>
                                                        <p className="card-text">This is a wider caad-in to additional content. This content is a little bit longer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row text-center text-wrap p-3">
                                                <div className="col">
                                            Lorem Ipsum is simply dum text ever sining essentially unchanged. It was populariwith desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </div>
                                            </div>
                                        </div>
                    </Carousel.Item>
                    </Carousel>

            <br />
                <div className="row-fluid text-light p-3 text-center">
                    <h1>
                        FAQ
                    </h1>
                </div>
            <div className="container">
                <div className="row-fluid text-light">
                    <Accordion defaultActiveKey="1" >
                        <Card className='p-0 m-0'>
                            <Card.Header className='bg-warning text-dark  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    1. Lorem Ipsum is simpl typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-warning' eventKey="1">
                                <Card.Body>Lorem Ipsum ied it to make a tronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-warning  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    2. Lorem Ipsum is simply dummy teddddasdsadadting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-warning' eventKey="2">
                                <Card.Body>Lorem Ipsum is simply duso the leap ie 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-warning text-dark p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    4. Lorem Ipsprinting and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-warning' eventKey="3">
                                <Card.Body>Lorem Ipsum is simplyext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-warning p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    3. Lorem Ipsum is simply ddwadadadadaddummy text of the printing and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-warning' eventKey="4">
                                <Card.Body>Lorem Ipsum is se the 1500s, when ved not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-warning text-dark  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                    5. Lorem Ipsum is simply  and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-warning' eventKey="5">
                                <Card.Body>Lorem Ipsum is simply dummy text of the p galley oe centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                    </Accordion>
    
                </div>
                </div>
            </div>
              

    </div>
}