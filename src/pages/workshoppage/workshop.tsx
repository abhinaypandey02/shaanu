
import { Card, Accordion, Carousel } from "react-bootstrap";
import FaqPage from "../faqPage/faq_page";

export default function WorkshopPage() {
    return (
        <div className="container-fluid m-0 p-0">
            <div className='pb-5' id='allpagesection'>
            <div className="row">
                <div className="col-12 text-center text-light my-5">
                    <h1>OUR SERVICES</h1>
                </div>
            </div>
            <div className="row d-flex mb-5 justify-content-around">
                <div className="col-12 col-md-5">
                    <div className="card text-white border rounded-0 border-warning mb-3" id='workshopcard'>
                        <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="card-img-top" alt="..." />
                        <div className="card-body bg-warning text-dark">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="card text-white border rounded-0 border-warning mb-3" id='workshopcard'>
                        <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="card-img-top" alt="..." />
                        <div className="card-body bg-warning text-dark">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex mb-5 justify-content-around">
                <div className="col-12 col-md-5">
                    <div className="card text-white border rounded-0 border-warning mb-3" id='workshopcard'>
                        <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="card-img-top" alt="..." />
                        <div className="card-body bg-warning text-dark">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="card text-white border rounded-0 border-warning mb-3" id='workshopcard'>
                        <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="card-img-top" alt="..." />
                        <div className="card-body bg-warning text-dark">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row text-center text-wrap p-3">
                                                <div className="col ">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row text-center text-wrap p-3">
                                                <div className="col">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row text-center text-wrap p-3">
                                                <div className="col">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                                <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-warning  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    2. Lorem Ipsum is simply dummy text of the printing and typesetdddddddddddddddddddddddddddasdsadadting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-warning' eventKey="2">
                                <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-warning text-dark p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    4. Lorem Ipsprinting and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-warning' eventKey="3">
                                <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-dark text-warning p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    3. Lorem Ipsum is simply ddwadadadadaddummy text of the printing and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-warning' eventKey="4">
                                <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className=' p-0 m-0'>
                            <Card.Header className='bg-warning text-dark  p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                    5. Lorem Ipsum is simply  and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-warning' eventKey="5">
                                <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                    </Accordion>
    
                </div>
                </div>
            </div>
        </div>);
}