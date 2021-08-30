import React, { useEffect, useState } from "react";
import { getErrorText } from "../../utils/globalFunctions";
import DatePicker from "react-datepicker";
import { Spinner } from "react-bootstrap";
import { useUser } from "../../contexts/user_context";
import { useForm } from "react-hook-form";
import VerifyOTP from "../verifyOTP/verifyOTP";
import firebase from "firebase";
import { getRecaptchaVerifier, sendSMS } from "../../utils/firebase/auth";

const today = new Date();
console.log(today);
const BookNowForm = ({
  onSuccess,
}: {
  onSuccess: ({
    fullname,
    phone,
    location,
    date,
  }: {
    fullname: string;
    phone: number;
    location: string;
    date: Date;
  }) => Promise<any>;
}) => {
  const [loading, setLoading] = useState(false);
  const [user] = useUser();
  let initialDate = new Date();
  initialDate.setDate(initialDate.getDate() + 1);
  initialDate.setHours(10, 0);
  const startTime = new Date();
  startTime.setHours(10, 0);
  const stopTime = new Date();
  stopTime.setHours(18, 0);
  const [startDate, setStartDate] = useState<Date>(initialDate);
  const [phoneResult, setPhoneResult] =
    useState<firebase.auth.ConfirmationResult>();
  const [reCaptcha, setReCaptcha] = useState<firebase.auth.RecaptchaVerifier>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    trigger,
    getValues,
    clearErrors,
  } = useForm();
  useEffect(() => {
    const ele = document.getElementById("date-picker");
    if (ele) {
      ele.setAttribute("disabled", "true");
    }
  }, []);

  useEffect(() => {
    if (user) return;
    const captcha = getRecaptchaVerifier("captcha");
    if (!reCaptcha) setReCaptcha(captcha);
    return () => captcha.clear();
  }, [user]);

  function changeDate(date: Date) {
    if (date < today) return;
    setStartDate(date);
    // setStartDate(nextAvailableDay(date, date.getHours()));
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    if (await trigger()) {
      clearErrors();
      setLoading(true);
      if (user) {
        onSuccessLocal();
      } else sendOTP().then(() => setLoading(false));
    }
  }

  async function onSuccessLocal(data?: any) {
    const arg = {
      fullname: user ? user.name : data.fullname,
      phone: user ? user.phone : data.phone,
      location: user ? getValues("location") : data.location,
      date: startDate,
    };
    await onSuccess(arg);
    setPhoneResult(undefined);
  }

  async function sendOTP(): Promise<boolean> {
    if (reCaptcha) {
      try {
        const result = await sendSMS(
          "+91" + getValues("phone").toString(),
          reCaptcha
        );
        setPhoneResult(result);
        return true;
      } catch (err) {
        setError("phone", { type: "custom", message: err.message });
        return false;
      }
    }
    return false;
  }

  return (
    <>
      <VerifyOTP
        phoneResult={phoneResult}
        onSuccess={handleSubmit(onSuccessLocal)}
        onHide={() => setPhoneResult(undefined)}
        resendOTP={sendOTP}
        authenticate={false}
      />
      <form
        noValidate={true}
        onSubmit={onSubmit}
        className="col-lg-12 pl-2 alert alert-warning text-dark rounded-0"
      >
        <h1 className="bg-warning ml-2 my-2">BOOK NOW</h1>
        <br />

        {!user && (
          <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
              FULL NAME
            </div>
            <div className="col-md-8">
              <input
                placeholder="Full Name"
                {...register("fullname", { required: true })}
                type="text"
                className="form-control bg-transparent border border-warning rounded-0 "
              />
              <div className="small text-danger text-left">
                {getErrorText(errors.fullname?.type)}
              </div>
            </div>
          </div>
        )}
        {!user && (
          <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
              PHONE NUMBER
            </div>
            <div className="col-md-8">
              <input
                {...register("phone", {
                  required: true,
                  maxLength: 10,
                  minLength: 10,
                  valueAsNumber: true,
                })}
                type="number"
                className="form-control bg-transparent border border-warning rounded-0 "
                placeholder="Phone Number"
              />
              <div className="small text-danger text-left">
                {getErrorText(errors.phone?.type, errors.phone?.message)}
              </div>
            </div>
          </div>
        )}
        <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
          <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
            LOCATION
          </div>
          <div className="col-md-8">
            <textarea
              placeholder="Location"
              {...register("location", { required: true })}
              className="form-control bg-transparent border border-warning rounded-0 "
            />
            <div className="small text-danger text-left">
              {getErrorText(errors.location?.type)}
            </div>
          </div>
        </div>

        <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
          <div className="col-md-4 mb-3 mb-2 bg-warning text-dark text-left ">
            PICK UP DATE AND TIME
          </div>
          <div className="col-md-8 text-md-center text-left">
            <button
              type="button"
              className="btn rounded-0 p-0 btn-outline-warning"
            >
              {!loading && (
                <DatePicker
                  id="date-picker"
                  className="rounded-0 m-0 alert alert-warning"
                  startDate={startDate}
                  showTimeSelect
                  dateFormat="dd-MM-yyyy HH:mm"
                  timeIntervals={60}
                  minTime={startTime}
                  maxTime={stopTime}
                  dayClassName={(day) => {
                    let className = "available ";
                    if (day < today) {
                      className += "disabled ";
                    }
                    return className;
                  }}
                  selected={startDate}
                  onChange={changeDate}
                />
              )}
            </button>
          </div>
        </div>
        <div id="captcha" />
        <div className="row align-items-center">
          <button
            type="submit"
            className="btn btn-lg btn-warning rounded-0 ml-auto m-3"
            disabled={loading}
          >
            Book
          </button>
          {loading && <Spinner className="m-2" animation={"border"} />}
        </div>
      </form>
    </>
  );
};

export default BookNowForm;
