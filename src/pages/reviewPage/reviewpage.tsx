import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Dropdown } from "react-bootstrap";
import "./reviewpage.css";
import filledStar from "../../images/filledStar.png";
import emptyStar from "../../images/emptyStar.png";
import { ReviewInterface } from "../../interfaces/reviewInterface";
import ReviewComponent from "../../components/reviews/reviewComponent";
import { useForm } from "react-hook-form";
import { getErrorText } from "../../utils/globalFunctions";
import { addReview, getReviews } from "../../utils/firebase/firestore";
import { useUser } from "../../contexts/user_context";

export default function ReviewPage() {
  const [rating, setRating] = useState(3);
  const [reviews, setReviews] = useState<ReviewInterface[]>([]);
  const [user] = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState<
    "RATING_ASC" | "RATING_DSC" | "LATEST" | "OLDEST"
  >("RATING_ASC");

  useEffect(() => {
    window.scrollTo(0, 0);
    updateReviews();
  }, []);

  async function updateReviews() {
    const r: any = await getReviews();
    setReviews([...r]);
  }

  switch (sortBy) {
    case "RATING_ASC": {
      reviews.sort((a, b) => a.rating - b.rating);
      break;
    }
    case "RATING_DSC": {
      reviews.sort((a, b) => b.rating - a.rating);
      break;
    }
    case "LATEST": {
      reviews.sort((a, b) => b.time - a.time);
      break;
    }
    case "OLDEST": {
      reviews.sort((a, b) => a.time - b.time);
      break;
    }
  }
  console.log("RERENDER");

  async function addReviewLocal(data: {
    name: string;
    designation: string;
    review: string;
  }) {
    setLoading(true);
    const review: ReviewInterface = {
      name: data.name,
      designation: data.designation,
      review: data.review,
      rating,
      time: new Date().getTime(),
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    };
    await addReview(review);
    setLoading(false);
    updateReviews();
    reset();
    alert("Review Added!");
  }

  useEffect(() => {
    console.log(reviews);
  }, [reviews]);

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
        {reviews.length}
        <ReviewComponent reviews={[...reviews]} />
      </div>
      <div className="container">
        <h1 className="text-warning mb-5">WRITE A REVIEW</h1>
        <form
          onSubmit={handleSubmit(addReviewLocal)}
          className="container pl-2 alert alert-warning rounded-0"
        >
          <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
              FULL NAME
            </div>
            <div className="col-md-8">
              <input
                {...register("name", { required: true })}
                placeholder="Full Name"
                className="form-control bg-transparent border border-warning rounded-0 "
              />
              <div className="small text-danger text-left">
                {getErrorText(errors.name?.type)}
              </div>
            </div>
          </div>
          <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
              ABOUT YOU (optional)
            </div>
            <div className="col-md-8">
              <input
                {...register("designation")}
                className="form-control bg-transparent border border-warning rounded-0 "
              />
              <div className="small text-danger text-left">
                {getErrorText(errors.designation?.type)}
              </div>
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
                    key={number}
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
                {...register("review")}
                className="form-control bg-transparent border border-warning rounded-0 "
                aria-label="With textarea"
              />
            </div>
            <div className="small text-danger text-left">
              {getErrorText(errors.review?.type)}
            </div>
          </div>

          <div className="row-fluid text-right p-0">
            <button
              type="submit"
              className="btn btn-lg mx-auto btn-warning rounded-0 pr-3 m-2"
              disabled={loading || !user}
            >
              {user ? "Submit" : "Sign In to submit Review"}
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
        {reviews.map((review) => (
          <div key={review.time} className="row">
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
