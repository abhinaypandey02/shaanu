import React, { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"
import { ReviewInterface } from "../../interfaces/reviewInterface"
import { getReviews } from "../../utils/firebase/firestore"

const ReviewComponent = (props: { reviews: ReviewInterface[] | null }) => {
    const [reviews, setReviews] = useState<ReviewInterface[]>(
        props.reviews ? props.reviews : []
    )

    useEffect(() => {
        getReviews().then((r: any) => setReviews(r))
    }, [])
    useEffect(() => {
        if (props.reviews) setReviews(props.reviews)
    }, [props.reviews])
    return (
        <Carousel>
            {reviews.map((ele) => (
                <Carousel.Item key={ele.time}>
                    <div
                        className="card mx-auto text-light rounded-0 p-3"
                        style={{ maxWidth: 1000 }}
                    >
                        <div className="row d-flex align-items-center justify-content-center">
                            <div
                                className="w-100 d-flex align-items-center justify-content-center flex-column mx-auto">
                                <div style={{ width: 180, height: 180 }}
                                     className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                                    <img
                                        className="img-fluid"
                                        src={ele.image}
                                        alt="..."
                                    />
                                </div>
                                <br />
                                <h5 className="card-title text-warning">
                                    <strong>{ele.name}</strong>
                                </h5>
                                <p className="card-text">{ele.designation}</p>
                            </div>
                            <div className="row text-center text-wrap p-3">
                                <div className="col-12 mb-4">
                                    <img
                                        src="https://i.imgur.com/csn3MwK.png"
                                        className="img-fluid "
                                        width={250}
                                        alt="..."
                                    />
                                </div>
                                <div className="col-12">{ele.review}</div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ReviewComponent
