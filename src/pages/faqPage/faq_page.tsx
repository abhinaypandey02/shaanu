import React from "react";
import { Carousel } from "react-bootstrap";

export default function FaqPage(){
    return(
        <div className="container-fluid">
            <div className="row-fluid text-light p-3 text-center">
                <h1>
                    FAQ
                </h1>
            </div>
        <Carousel fade>
        <Carousel.Item>
  <div className="card mx-auto text-light border-light p-3" style={{ maxWidth: 1000 }} >
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-2 my-auto">
                                <img src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className='img-fluid border rounded-circle' alt="..." />
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
</div>
    );
}