import React from 'react';
import {Carousel} from "react-bootstrap";
import {ReviewInterface} from "../../interfaces/reviewInterface";
import reviewsJSON from "../../database/reviews.json";

const ReviewComponent = () => {
    let REVIEWS:ReviewInterface[]=reviewsJSON.reviews;
    return (
        <Carousel>
            {REVIEWS.map(ele => <Carousel.Item>
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
    );
};

export default ReviewComponent;