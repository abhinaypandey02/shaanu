import { useHistory } from "react-router";
import "./estimate_page.css";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useGlobalState } from "../../contexts/global_state";
import { useUser } from "../../contexts/user_context";
import { addCallbackRequest } from "../../utils/firebase/firestore";
import CallbackRequest from "../../interfaces/callbackRequest";

export default function EstimatePage() {
    const history = useHistory();
    const [{ cart }] = useGlobalState();
    const [user] = useUser();
    console.log(cart);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [link, setLink] = useState("");
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    function addCallbackRequestLocal() {
        const request: CallbackRequest = { fullname, phone, location,date:new Date().toISOString() };
        addCallbackRequest(request).then(() => {
            setFullname("");
            setPhone("");
            setLocation("");
            setShowConfirmationModal(true);
        });
    }

    useEffect(() => {
        const dataToSend = {
            items: cart.map((item) => ({
                name: `(${item.type}) ` + item.subPlan.title,
                quantity: 1,
                unit_cost: item.subPlan.price,
            })),
            to: user
                ? `${user?.firstName} ${user?.lastName}`
                : "Whomsoever it may concern",
        };
        fetch("https://us-central1-entertainment-coach-db.cloudfunctions.net/createdAt/pdf", {
            method: "post",
            body: JSON.stringify(dataToSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then((data) => {
            data.json().then((res) => {
                res = res.reduce(
                    (acc: any, value: any) => [...acc, ...value.data],
                    []
                );
                const tempLink: any = window.URL.createObjectURL(
                    new Blob([new Uint8Array(res)], { type: "application/pdf" })
                );
                setLink(tempLink);
            });
        });
    }, [user, cart]);
    return (
        <div className="container-fluid d-flex flex-grow-1  justify-content-center align-items-center">
            <Modal
                centered={true}
                show={showConfirmationModal}
                onHide={() => setShowConfirmationModal(false)}
            >
                <Modal.Header closeButton={true}></Modal.Header>
                <Modal.Body className="text-center">
                    <h1>THANKS FOR CHOOSING</h1>
                    <br />
                    <h1>CAR PLUS</h1>
                    <br />
                    <Button onClick={() => history.push("/freeservices")}>
                        Add 100% Free Servics
                    </Button>
                </Modal.Body>
            </Modal>
            <div className="row text-center w-100 ">
                <div className="col-lg-6 ">
                    {link !== "" && (
                        <iframe
                            style={{ height: 1000 }}
                            className="w-100 "
                            title="pdf"
                            src={link}
                        ></iframe>
                    )}
                    {link !== "" && (
                        <a
                            download="invoice.pdf"
                            href={link}
                            className="btn m-3 btn btn-outline-light"
                        >
                            DOWNLOAD PDF
                        </a>
                    )}
                    {link === "" && (
                        <div className="display-4 text-info">
                            generating PDF
                        </div>
                    )}
                </div>

                <div className="col-lg-6">
                    <button
                        onClick={() => history.push("/profile")}
                        type="button"
                        className="btn btn-lg m-3 btn-outline-light"
                    >
                        Create your car's profile
                    </button>
                    <button
                        onClick={() => history.push("/booknow")}
                        type="button"
                        className="btn btn-lg m-3 btn-outline-light"
                    >
                        Book Now
                    </button>
                    <h1 className="text-light">OR</h1>
                    <br />
                    <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                            FULL NAME
                        </div>
                        <div className="col-6">
                            <input
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                            PHONE NUMBER
                        </div>
                        <div className="col-6">
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                            LOCATION
                        </div>
                        <div className="col-6 ">
                            <textarea
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="form-control"
                                aria-label="With textarea"
                            ></textarea>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-lg mx-auto btn-outline-light m-3"
                        onClick={() => addCallbackRequestLocal()}
                    >
                        Request A Callback
                    </button>
                </div>
            </div>
        </div>
    );
}
