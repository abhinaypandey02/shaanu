import { useHistory } from "react-router";
import "./estimate_page.css";
import { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useGlobalState } from "../../contexts/global_state";
import { useUser } from "../../contexts/user_context";
import { addCallbackRequest } from "../../utils/firebase/firestore";
import CallbackRequest from "../../interfaces/callbackRequest";
import { useForm } from "react-hook-form";
import { PDFReader } from "reactjs-pdf-reader";
import { getErrorText } from "../../utils/globalFunctions";
import blurredPDF from "../../images/blurredPDF.jpg";
import firebase from "firebase";
import { getRecaptchaVerifier, sendSMS } from "../../utils/firebase/auth";
import VerifyOTP from "../../components/verifyOTP/verifyOTP";
import { v4 } from "uuid";

export default function EstimatePage() {
  const history = useHistory();
  const [{ cart }] = useGlobalState();
  const [user] = useUser();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [link, setLink] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    getValues,
    trigger,
    setError,
  } = useForm();
  const [notLoggedInModalShow, setNotLoggedInModalShow] = useState(false);
  const [phoneResult, setPhoneResult] =
    useState<firebase.auth.ConfirmationResult>();
  const [reCaptcha, setReCaptcha] = useState<firebase.auth.RecaptchaVerifier>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user) return;
    const captcha = getRecaptchaVerifier("captcha");
    if (!reCaptcha) setReCaptcha(captcha);
    return () => captcha.clear();
  }, []);

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

  async function addCallbackRequestLocal({
    phone,
    location,
    fullname,
  }: {
    phone: number;
    location: string;
    fullname: string;
  }) {
    const request: CallbackRequest = {
      fullname,
      phone,
      location,
      date: new Date().toISOString(),
      id: v4(),
    };
    await addCallbackRequest(request);
    reset();
    setPhoneResult(undefined);
    setShowConfirmationModal(true);
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    if (await trigger()) {
      clearErrors();

      if (user) {
        await handleSubmit(addCallbackRequestLocal)();
      } else {
        setLoading(true);
        sendOTP().then(() => setLoading(false));
      }
    }
  }

  function onDownload() {
    if (user) document.getElementById("downloadInvoice")?.click();
    else setNotLoggedInModalShow(true);
  }

  function onSingleCallbackButtonClick() {
    if (user)
      addCallbackRequestLocal({
        phone: user.phone,
        location: "",
        fullname: user.name,
      });
  }

  useEffect(() => {
    if (cart.length === 0) {
      history.push("/");
      return;
    }
    if (!user) return;
    const dataToSend = {
      items: cart.map((item) => ({
        name: `${
          item.service.name
        } for ${item.brand.toUpperCase()} ${item.model.toUpperCase()} (${item.fuel.toUpperCase()})`,
        quantity: 1,
        unit_cost: item.service.price,
      })),
      to: user ? `${user?.name}` : "Whomsoever it may concern",
    };
    fetch(
      "https://us-central1-entertainment-coach-db.cloudfunctions.net/createdAt/pdf",
      {
        method: "post",
        body: JSON.stringify(dataToSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      data.json().then((res) => {
        res = res.reduce((acc: any, value: any) => [...acc, ...value.data], []);
        const tempLink: any = window.URL.createObjectURL(
          new Blob([new Uint8Array(res)], { type: "application/pdf" })
        );
        setLink(tempLink);
      });
    });
    //eslint-disable-next-line
  }, [user, cart]);
  return (
    <div
      className="container-fluid d-flex flex-grow-1  justify-content-center align-items-center"
      id="allpagesection"
    >
      {!user && (
        <VerifyOTP
          phoneResult={phoneResult}
          onSuccess={handleSubmit(addCallbackRequestLocal)}
          onHide={() => setPhoneResult(undefined)}
          resendOTP={sendOTP}
          authenticate={false}
        />
      )}
      <Modal
        contentClassName="bg-dark border border-warning p-0 rounded-0"
        centered={true}
        show={showConfirmationModal}
        onHide={() => setShowConfirmationModal(false)}
      >
        <Modal.Header className="bg-warning rounded-0" closeButton={true} />
        <Modal.Body className="text-center text-warning">
          <h1>THANKS FOR CHOOSING</h1>
          <h1>CAR PLUS</h1>

          <Button
            className="btn-warning rounded-0"
            onClick={() => history.push("/freeservices")}
          >
            Add <strong>100% Free</strong> Servics
          </Button>
        </Modal.Body>
      </Modal>
      <Modal
        contentClassName="bg-dark border border-warning p-0 rounded-0"
        centered={true}
        show={notLoggedInModalShow}
        onHide={() => setNotLoggedInModalShow(false)}
      >
        <Modal.Header className="bg-warning rounded-0" closeButton={true}>
          NOT LOGGED IN
        </Modal.Header>
        <Modal.Body className="text-center text-warning">
          <h1>Please signup to download/view estimated bill.</h1>
        </Modal.Body>
      </Modal>
      <div className="row text-center w-100 ">
        <div className="col-xl-6 py-3 d-flex justify-content-center align-items-center flex-column">
          {link !== "" && (
            <div style={{ overflow: "hidden", maxWidth: "100%" }}>
              <PDFReader scale={1} url={link} />
              <br />
            </div>
          )}

          {!user && (
            <div>
              <a href="#profile">
                <div
                  className="alert alert-danger"
                  id="signinpdfalert"
                  role="alert"
                >
                  <strong>SIGN IN TO VIEW THE ESTIMATED BILL!</strong>
                </div>
              </a>
              <img
                src={blurredPDF}
                className="img-fluid"
                alt="blurred invoice"
              />
            </div>
          )}
          {link !== "" && (
            <a
              download="invoice.pdf"
              href={link}
              id="downloadInvoice"
              className="d-none"
            >
              Download PDF
            </a>
          )}
          {(!user || link !== "") && (
            <button onClick={onDownload} className="btn btn-outline-light  m-3">
              DOWNLOAD PDF
            </button>
          )}
          {user && link === "" && (
            <div className="text-info align-items-center">
              Generating PDF
              <Spinner className="m-2" animation={"border"} />
            </div>
          )}
        </div>

        <div className="col-xl-6">
          <div>
            {!user && (
              <button
                onClick={() => history.push("/profile")}
                type="button"
                className="btn btn-lg m-3 btn-warning rounded-0"
              >
                Create your car's profile
              </button>
            )}
            <button
              onClick={() => history.push("/booknow")}
              type="button"
              className="btn btn-lg m-3 btn-outline-warning rounded-0"
            >
              Book Now
            </button>
            <h1 className="text-warning">OR</h1>
            <br />
          </div>

          {!user && (
            <form
              noValidate={true}
              onSubmit={onSubmit}
              className="container pl-2 alert alert-warning rounded-0"
            >
              <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
                <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                  FULL NAME
                </div>
                <div className="col-md-8">
                  <input
                    placeholder="Full Name"
                    {...register("fullname", { required: true })}
                    className="form-control bg-transparent border border-warning rounded-0 "
                  />
                  <div className="small text-danger text-left">
                    {getErrorText(errors.fullname?.type)}
                  </div>
                </div>
              </div>

              <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                  PHONE NUMBER
                </div>
                <div className="col-md-8">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                      valueAsNumber: true,
                    })}
                    className="form-control bg-transparent border border-warning rounded-0 "
                  />
                  <div className=" small text-danger text-left">
                    {getErrorText(errors.phone?.type, errors.phone?.message)}
                  </div>
                </div>
              </div>
              <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
                <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                  LOCATION
                </div>
                <div className="col-md-8">
                  <textarea
                    placeholder="Location"
                    {...register("location", { required: true })}
                    className="form-control bg-transparent border border-warning rounded-0 "
                    aria-label="With textarea"
                  />
                  <div className="small text-danger text-left">
                    {getErrorText(errors.location?.type)}
                  </div>
                </div>
              </div>
              <div id="captcha" />
              <div className="row-fluid text-right p-0 align-items-center">
                {loading && <Spinner className="m-2" animation={"border"} />}
                <button
                  type="submit"
                  className="btn btn-lg mx-auto btn-warning rounded-0 pr-3 m-2"
                  disabled={loading}
                >
                  Request A Callback
                </button>
              </div>
            </form>
          )}
          {user && (
            <Button
              onClick={onSingleCallbackButtonClick}
              className="btn btn-lg mx-auto btn-warning rounded-0 pr-3 m-2"
            >
              Request a Callback
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
