import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Dropdown } from "react-bootstrap";
import "./reviewpage.css";
import filledStar from "../../images/filledStar.png";
import emptyStar from "../../images/emptyStar.png";
import reviewsJSON from "../../database/reviews.json";
import { ReviewInterface } from "../../interfaces/reviewInterface";
import ReviewComponent from "../../components/reviews/reviewComponent";

export default function ReviewPage() {
  const [rating, setRating] = useState(3);
  const [sortBy, setSortBy] = useState<
    "RATING_ASC" | "RATING_DSC" | "LATEST" | "OLDEST"
  >("RATING_ASC");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let REVIEWS: ReviewInterface[] = reviewsJSON.reviews;
  switch (sortBy) {
    case "RATING_ASC": {
      REVIEWS.sort((a, b) => a.rating - b.rating);
      break;
    }
    case "RATING_DSC": {
      REVIEWS.sort((a, b) => b.rating - a.rating);
      break;
    }
    case "LATEST": {
      REVIEWS.sort((a, b) => b.time - a.time);
      break;
    }
    case "OLDEST": {
      REVIEWS.sort((a, b) => a.time - b.time);
      break;
    }
  }
  return (
    <div className="container">
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={3}>
          <div className="row mr-auto">
            <hr className="bg-light py-1 mx-2" style={{ width: 30 }} />
            <p className="my-auto text-light">
              <strong>Customer Reviews</strong>
            </p>
          </div>
          <h1 className="text-warning mb-5">Hear it from them.</h1>
        </ScrollAnimation>

        <br />
        <ReviewComponent />
      </div>
      <div className="container">
        <h1 className="text-warning mb-5">WRITE A REVIEW</h1>
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
              <div className="small text-danger text-left" />
            </div>
          </div>
          <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
              ABOUT YOU (optional)
            </div>
            <div className="col-md-8">
              <input className="form-control bg-transparent border border-warning rounded-0 " />
              <div className="small text-danger text-left" />
            </div>
          </div>
          <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
              STARS
            </div>
            <div className="col-md-8 d-flex justify-content-start">
              <div>
                {[1, 2, 3, 4, 5].map((number) => (
                  <span
                    className="pointer-on-hover"
                    onClick={() => setRating(number)}
                  >
                    <img
                      height={30}
                      src={rating >= number ? filledStar : emptyStar}
                      alt="star"
                    />
                  </span>
                ))}
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
        <hr className="bg-warning mt-5" />
      </div>
      <div className="container">
        <div className="row-fluid text-light text-center mt-5">
          <h1 className="font-weight-bold">MORE REVIEWS</h1>
        </div>
        <div className="row-fluid text-right mb-3">
          <Dropdown>
            <Dropdown.Toggle
              variant="warning"
              className="btn-sm"
              id="dropdown-basic"
            >
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSortBy("RATING_DSC")}>
                Highest Rating
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortBy("RATING_ASC")}>
                Lowest Rating
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortBy("LATEST")}>
                Latest
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortBy("OLDEST")}>
                Oldest
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {REVIEWS.map((review) => (
          <div className="row">
            <div
              className="card border border-warning rounded-0 mx-auto text-light rounded-0 p-3"
              style={{ maxWidth: 1000 }}
            >
              <div className="row d-flex flex-column align-items-center justify-content-center">
                <div className="row d-flex align-items-center justify-content-center flex-column mx-auto">
                  <img
                    src={review.image}
                    className="img-fluid border w-25 bg-light rounded-circle"
                    alt="..."
                  />
                  <br />

                  <h5 className="card-title text-warning">
                    <strong>{review.name}</strong>
                  </h5>
                  <p className="card-text">{review.designation}</p>
                </div>
                <div className="my-3">
                  {[1, 2, 3, 4, 5].map((number) => (
                    <span>
                      <img
                        height={30}
                        src={review.rating >= number ? filledStar : emptyStar}
                        alt="star"
                      />
                    </span>
                  ))}
                </div>
                <div className="row text-center text-wrap p-3">
                  <div className="col-12">{review.review}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
