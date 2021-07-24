import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Accordion, Card, Button, Carousel, Dropdown } from "react-bootstrap";
export default function BlogPage(){
    return(
        <div className="container-fluid bg-warning p-2">
        <div className='container '>
            <br/>
            <h1>OUR COOL BLOGS</h1>
            <hr className='bg-dark'/>
            <br/>
            <div className="row mb-4">
                <div className="col-md-4">
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg" />
                    <Card.Body>
                        <Card.Title className='font-weight-bold'>Card Title</Card.Title>
                        <Card.Text className=''>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <p className="text-muted">
                            @ minutes read.
                        </p>
                        
                    </Card.Body>
                </Card>
                </div>
                <div className="col-md-4">
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg" />
                    <Card.Body>
                        <Card.Title className='font-weight-bold'>Card Title</Card.Title>
                        <Card.Text className=''>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <p className="text-muted">
                            @ minutes read.
                        </p>
                        
                    </Card.Body>
                </Card>
                </div>
                <div className="col-md-4">
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg" />
                    <Card.Body>
                        <Card.Title className='font-weight-bold'>Card Title</Card.Title>
                        <Card.Text className=''>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <p className="text-muted">
                            @ minutes read.
                        </p>
                        
                    </Card.Body>
                </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg" />
                    <Card.Body>
                        <Card.Title className='font-weight-bold'>Card Title</Card.Title>
                        <Card.Text className=''>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <p className="text-muted">
                            @ minutes read.
                        </p>
                        
                    </Card.Body>
                </Card>
                </div>
                <div className="col-md-4">
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg" />
                    <Card.Body>
                        <Card.Title className='font-weight-bold'>Card Title</Card.Title>
                        <Card.Text className=''>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <p className="text-muted">
                            @ minutes read.
                        </p>
                        
                    </Card.Body>
                </Card>
                </div>
                <div className="col-md-4">
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg" />
                    <Card.Body>
                        <Card.Title className='font-weight-bold'>Card Title</Card.Title>
                        <Card.Text className=''>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <p className="text-muted">
                            @ minutes read.
                        </p>
                        
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
        </div>
    );
}