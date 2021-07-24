import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Accordion, Card, Carousel, Dropdown } from "react-bootstrap";
import './reviewpage.css';
export default function ReviewPage(){
    return(
        <div className="container">
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
                        <div className="container">
                        <h1 className='text-warning mb-5'>
                        WRITE A REVIEW
                    </h1>
                        <form className="container pl-2 alert alert-warning rounded-0">
                        <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
                            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                                FULL NAME
                            </div>
                            <div className="col-md-8">
                                <input
                                    placeholder="Full Name"
                         
                                    className="form-control bg-transparent border border-warning rounded-0 "
                                />
                                <div className="small text-danger text-left"></div>

                            </div>
                        </div>
                        <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
                            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                              ABOUT YOU (optional)
                            </div>
                            <div className="col-md-8">
                            <input
                               
                                className="form-control bg-transparent border border-warning rounded-0 "
                           
                            />
                                <div  className="small text-danger text-left"></div>

                            </div>
                        </div>
                        <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
                            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                              STARS
                            </div>
                            <div className="col-md-8 d-flex justify-content-start">

                                 <div className="stars pl-0 ml-0">
                <form action=""> <input className="star star-5" id="star-5" type="radio" name="star" />
                 <label className="star star-5" htmlFor="star-5"></label> 
                 <input className="star star-4" id="star-4" type="radio" name="star" /> 
                 <label className="star star-4" htmlFor="star-4"></label> 
                 <input className="star star-3" id="star-3" type="radio" name="star" /> 
                 <label className="star star-3" htmlFor="star-3"></label>
                  <input className="star star-2" id="star-2" type="radio" name="star" /> 
                  <label className="star star-2" htmlFor="star-2"></label> <input className="star star-1" id="star-1" type="radio" name="star" /> 
                  <label className="star star-1" htmlFor="star-1"></label> </form>
            </div>

                            </div>
                        </div>
                        <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
                            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                                REVIEW
                            </div>
                            <div className="col-md-8">
                            <textarea
                               
                                className="form-control bg-transparent border border-warning rounded-0 "
                                aria-label="With textarea"
                            />
                                <div  className="small text-danger text-left"></div>

                            </div>
                        </div>
                       
                 
                        <div className="row-fluid text-right p-0">
                            
                            <button
                                type="submit"
                                className="btn btn-lg mx-auto btn-warning rounded-0 pr-3 m-2"
                                
                            >
                               Submit
                            </button>

                        </div>

                    </form>
                        </div>
            <div className="container">
                <hr className='bg-warning mt-5'/>
            </div>
            <div className="container">
                <div className="row-fluid text-light text-center mt-5"><h1 className='font-weight-bold'>MORE REVIEWS</h1></div>
                <div className="row-fluid text-right mb-3">
                <Dropdown>
                    <Dropdown.Toggle variant="warning" className='btn-sm' id="dropdown-basic">
                        Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Highest</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Lowest</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
              
                <div className="row">
                        <div className="card border border-warning rounded-0 mx-auto text-light rounded-0 p-3" style={{ maxWidth: 1000 }} >
                            <div className="row d-flex align-items-center justify-content-center">

                                <div className="row d-flex align-items-center justify-content-center flex-column mx-auto">

                                    <img src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png' className='img-fluid border w-25 bg-light rounded-circle' alt="..." />
                                    <br/>
                    
                                    <h5 className="card-title text-warning">
                                        <strong >dadwad</strong>
                                    </h5>
                                    <p className="card-text">dadadwa</p>

                                </div>
                                <div className="row text-center text-wrap p-3">

                                    <div className="col-12">
                                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente error atque, eius vero, optio vitae veniam, iusto recusandae aliquid quas a nesciunt. Molestias placeat at repudiandae amet odio nulla illo.
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row">
                        <div className="card border border-warning rounded-0 mx-auto text-light rounded-0 p-3" style={{ maxWidth: 1000 }} >
                            <div className="row d-flex align-items-center justify-content-center">

                                <div className="row d-flex align-items-center justify-content-center flex-column mx-auto">

                                    <img src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png' className='img-fluid border w-25 bg-light rounded-circle' alt="..." />
                                    <br/>
                    
                                    <h5 className="card-title text-warning">
                                        <strong >dadwad</strong>
                                    </h5>
                                    <p className="card-text">dadadwa</p>

                                </div>
                                <div className="row text-center text-wrap p-3">

                                    <div className="col-12">
                                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente error atque, eius vero, optio vitae veniam, iusto recusandae aliquid quas a nesciunt. Molestias placeat at repudiandae amet odio nulla illo.
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row">
                        <div className="card border border-warning rounded-0 mx-auto text-light rounded-0 p-3" style={{ maxWidth: 1000 }} >
                            <div className="row d-flex align-items-center justify-content-center">

                                <div className="row d-flex align-items-center justify-content-center flex-column mx-auto">

                                    <img src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png' className='img-fluid border w-25 bg-light rounded-circle' alt="..." />
                                    <br/>
                    
                                    <h5 className="card-title text-warning">
                                        <strong >dadwad</strong>
                                    </h5>
                                    <p className="card-text">dadadwa</p>

                                </div>
                                <div className="row text-center text-wrap p-3">

                                    <div className="col-12">
                                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente error atque, eius vero, optio vitae veniam, iusto recusandae aliquid quas a nesciunt. Molestias placeat at repudiandae amet odio nulla illo.
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="row">
                        <div className="card border border-warning rounded-0 mx-auto text-light rounded-0 p-3" style={{ maxWidth: 1000 }} >
                            <div className="row d-flex align-items-center justify-content-center">

                                <div className="row d-flex align-items-center justify-content-center flex-column mx-auto">

                                    <img src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png' className='img-fluid border w-25 bg-light rounded-circle' alt="..." />
                                    <br/>
                    
                                    <h5 className="card-title text-warning">
                                        <strong >dadwad</strong>
                                    </h5>
                                    <p className="card-text">dadadwa</p>

                                </div>
                                <div className="row text-center text-wrap p-3">

                                    <div className="col-12">
                                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente error atque, eius vero, optio vitae veniam, iusto recusandae aliquid quas a nesciunt. Molestias placeat at repudiandae amet odio nulla illo.
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row">
                        <div className="card border border-warning rounded-0 mx-auto text-light rounded-0 p-3" style={{ maxWidth: 1000 }} >
                            <div className="row d-flex align-items-center justify-content-center">

                                <div className="row d-flex align-items-center justify-content-center flex-column mx-auto">

                                    <img src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png' className='img-fluid border w-25 bg-light rounded-circle' alt="..." />
                                    <br/>
                    
                                    <h5 className="card-title text-warning">
                                        <strong >dadwad</strong>
                                    </h5>
                                    <p className="card-text">dadadwa</p>

                                </div>
                                <div className="row text-center text-wrap p-3">

                                    <div className="col-12">
                                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente error atque, eius vero, optio vitae veniam, iusto recusandae aliquid quas a nesciunt. Molestias placeat at repudiandae amet odio nulla illo.
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row">
                        <div className="card border border-warning rounded-0 mx-auto text-light rounded-0 p-3" style={{ maxWidth: 1000 }} >
                            <div className="row d-flex align-items-center justify-content-center">

                                <div className="row d-flex align-items-center justify-content-center flex-column mx-auto">

                                    <img src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png' className='img-fluid border w-25 bg-light rounded-circle' alt="..." />
                                    <br/>
                    
                                    <h5 className="card-title text-warning">
                                        <strong >dadwad</strong>
                                    </h5>
                                    <p className="card-text">dadadwa</p>

                                </div>
                                <div className="row text-center text-wrap p-3">

                                    <div className="col-12">
                                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente error atque, eius vero, optio vitae veniam, iusto recusandae aliquid quas a nesciunt. Molestias placeat at repudiandae amet odio nulla illo.
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}