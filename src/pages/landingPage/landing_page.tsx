import React from 'react';
import { Accordion, Card, Carousel } from 'react-bootstrap';
import CarsMenu from '../../components/carsMenu/cars_menu';
import { useGlobalState } from '../../contexts/global_state';
import './landing_page.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
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
                                    <ScrollAnimation animateIn='zoomInUp'  animateOnce={true} initiallyVisible={true} duration={3}>
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
            <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} duration={3}>
                    <div className="row mr-auto">
                         <hr className='bg-warning py-1  mx-2' style={{width:30}}/> 
                         <p className='my-auto text-warning'> <strong>Top Services</strong></p>
                         
                    </div>                    
                    
                <h1 className='display-5 '>Services that make your car perfect.</h1>
                </ScrollAnimation>
            </div>
            <br/>
            <div className="row mt-4">
                <div className="col-md-4">
                    
                    <div className="card mx-auto" style={{width: 350}} id='servicecard'>
                    <img src="https://storage.googleapis.com/gomechanic_assets/category_icons/battery-v3.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-warning">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                
                    <div className="card mx-auto" style={{width: 350}} id='servicecard'>
                    <img src="https://storage.googleapis.com/gomechanic_assets/category_icons/schedule-services-v3.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-warning">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                    </div>
                  
                </div>
                <div className="col-md-4">
                    <div className="card mx-auto" style={{width: 350}} id='servicecard'>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,202.7C672,203,768,181,864,165.3C960,149,1056,139,1152,133.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>        <div className="container-fluid" id='section3' >
            <div className="container">
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={3}>
                    <div className="row mr-auto">
                         <hr className='bg-light py-1 mx-2' style={{width:30}}/> 
                         <p className='my-auto text-light'> <strong>Customer Reviews</strong></p>
                  
                         
                    </div>     
                    <h1 className='text-warning mb-5'>
               Hear it from them.
                </h1>            
                </ScrollAnimation>   
                
    <br/>
                            <Carousel fade>
                            <Carousel.Item>
                            <div className="card mx-auto text-light rounded-0 p-3" style={{ maxWidth: 1000 }} >
                                            <div className="row d-flex align-items-center justify-content-center">
                                                
                                                <div className="col-md-4 d-flex align-items-center justify-content-center flex-column mx-auto">
                                                
                                                   <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className='img-fluid border w-50 rounded-circle' alt="..." />
                                                  <br/>
                                                  <h5 className="card-title text-warning">
                                                      <strong >User Name</strong>
                                                      </h5>
                                                        <p className="card-text">CEO,Space sex</p>
                                                
                                                        
                                                    
                                             
                                            </div>
                                            <div className="row text-center text-wrap p-3">
                                                <div className="col-12 mb-4">
                                                <img src="https://i.imgur.com/csn3MwK.png" className='img-fluid ' width={250} alt="..." />

                                                </div>
                                              
                                                <div className="col-12">
                                            Lorem Ipsum is simply duook. It has survived not only five centuries, bing essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                            <div className="card mx-auto text-light rounded-0 p-3" style={{ maxWidth: 1000 }} >
                                            <div className="row d-flex align-items-center justify-content-center">
                                                
                                                <div className="col-md-4 d-flex align-items-center justify-content-center flex-column mx-auto">
                                                
                                                   <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className='img-fluid border w-50 rounded-circle' alt="..." />
                                                  <br/>
                                                  <h5 className="card-title text-warning">
                                                      <strong >Usdwame</strong>
                                                      </h5>
                                                        <p className="card-text">CdwSpace sex</p>
                                                
                                                        
                                                    
                                             
                                            </div>
                                            <div className="row text-center text-wrap p-3">
                                                <div className="col-12 mb-4">
                                                <img src="https://i.imgur.com/csn3MwK.png" className='img-fluid ' width={250} alt="..." />

                                                </div>
                                              
                                                <div className="col-12">
                                            Lorem Ipsum is simplyy five centuries, bing essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                            <div className="card mx-auto text-light rounded-0 p-3" style={{ maxWidth: 1000 }} >
                                            <div className="row d-flex align-items-center justify-content-center">
                                                
                                                <div className="col-md-4 d-flex align-items-center justify-content-center flex-column mx-auto">
                                                
                                                   <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className='img-fluid border w-50 rounded-circle' alt="..." />
                                                  <br/>
                                                  <h5 className="card-title text-warning">
                                                      <strong >Usdwer Name</strong>
                                                      </h5>
                                                        <p className="card-text">CEO,Spacedwdex</p>
                                                
                                                        
                                                    
                                             
                                            </div>
                                            <div className="row text-center text-wrap p-3">
                                                <div className="col-12 mb-4">
                                                <img src="https://i.imgur.com/csn3MwK.png" className='img-fluid ' width={250} alt="..." />

                                                </div>
                                              
                                                <div className="col-12">
                                            Lorem Ipsum is simply dummy t. Lorem Ipsum has been type specimen book. It has survived not only five centuries, bing essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                    </Carousel.Item>
                   
                    </Carousel>

            <br />
            </div>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,96L48,96C96,96,192,96,288,122.7C384,149,480,203,576,197.3C672,192,768,128,864,122.7C960,117,1056,171,1152,202.7C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>                
            
            <div className="container-fluid bg-warning text-light p-3">
                <div className="container">
                <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} duration={3}>
                    <div className="row mr-auto">
                         <hr className='bg-light py-1 mx-2' style={{width:30}}/> 
                         <p className='my-auto text-light'> <strong>FAQ</strong></p>
                  
                         
                    </div>     
                    <h1 className='text-dark mb-5'>
               Commonly Asked Questions
                </h1>            
                </ScrollAnimation>   
                </div>
          
                
                    </div>
                    <div className="container-fluid bg-warning">
                    <div className="container bg-warning" >
                <div className="row-fluid text-light">
                    <Accordion defaultActiveKey="1" >
                        <Card className='p-0 m-0'>
                            <Card.Header className='bg-dark text-light  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    1. Lorem Ipsum is simpl typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="1">
                                <Card.Body className='text-dark'>Lorem Ipsum ied it to make a tronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    2. Lorem Ipsum is simply dummy teddddasdsadadting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="2">
                                <Card.Body className='text-dark'>Lorem Ipsum is simply duso the leap ie 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    4. Lorem Ipsprinting and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="3">
                                <Card.Body className='text-dark'>Lorem Ipsum is simplyext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-light text-dark p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    3. Lorem Ipsum is simply ddwadadadadaddummy text of the printing and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="4">
                                <Card.Body className='text-dark'>Lorem Ipsum is se the 1500s, when ved not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-light  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                    5. Lorem Ipsum is simply  and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="5">
                                <Card.Body className='text-dark'>Lorem Ipsum is simply dummy text of the p galley oe centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                    </Accordion>
    
                </div>
                </div>
                    </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            
              

    </div>
}