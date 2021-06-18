
import { Card, Accordion } from "react-bootstrap";
import FaqPage from "../faqPage/faq_page";

export default function WorkshopPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center text-light my-5">
                    <h1>OUR SERVICES</h1>
                </div>
            </div>
            <div className="row d-flex mb-5 justify-content-around">
                <div className="col-12 col-md-5">
                    <div className="card text-white border border-light mb-3" id='workshopcard'>
                        <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="card text-white border border-light mb-3" id='workshopcard'>
                        <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-around">
                <div className="col-12 col-md-5">
                    <div className="card text-white border border-light mb-3" id='workshopcard'>
                        <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="card text-white border border-light mb-3" id='workshopcard'>
                        <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <FaqPage />

            <br />
            <div className="row-fluid text-light p-3 text-center">
                <h1>
                    FAQ
                </h1>
            </div>
            <div className="container text-light">
                <div className="row-fluid">
                    <Accordion defaultActiveKey="1" >
                        <Card>
                            <Card.Header className='border border-light p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    1. Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="1">
                                <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className='border border-light p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    2. Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="2">
                                <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className='border border-light p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    4. Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="3">
                                <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className='border border-light p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    3. Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='border border-light' eventKey="4">
                                <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                    </Accordion>
    
                </div>
       
            </div>
        </div>);
}