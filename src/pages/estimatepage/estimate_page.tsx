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
        <div className="container-fluid d-flex flex-grow-1  justify-content-center align-items-center" id='allpagesection'>
            <Modal
            contentClassName='bg-dark border border-warning p-0 rounded-0'
                centered={true}
                show={showConfirmationModal}
                onHide={() => setShowConfirmationModal(false)}
            >
                <Modal.Header className='bg-warning rounded-0' closeButton={true}></Modal.Header>
                <Modal.Body className="text-center text-warning">
                    <h1>THANKS FOR CHOOSING</h1>
                    <h1>CAR PLUS</h1>
                  
                    <Button className='btn-warning rounded-0' onClick={() => history.push("/freeservices")}>
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
                        className="btn btn-lg m-3 btn-warning rounded-0"
                    >
                        Create your car's profile
                    </button>
                    <button
                        onClick={() => history.push("/booknow")}
                        type="button"
                        className="btn btn-lg m-3 btn-outline-warning rounded-0"
                    >
                        Book Now
                    </button>
                    <h1 className="text-warning">OR</h1>
                    <br />
                    <div className="container pl-2 alert alert-warning rounded-0">
                    <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
                        <div className="col-md-4 bg-warning text-dark text-left ">
                            FULL NAME
                        </div>
                        <div className="col-md-8">
                            <input
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                type="text"
                                className="form-control bg-transparent border border-warning rounded-0 "
                            />
                        </div>
                    </div>
                    <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                        <div className="col-md-4 bg-warning text-dark text-left ">
                            PHONE NUMBER
                        </div>
                        <div className="col-md-8">
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                className="form-control bg-transparent border border-warning rounded-0 "
                            />
                        </div>
                    </div>
                    <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
                        <div className="col-md-4 bg-warning text-dark text-left ">
                            LOCATION
                        </div>
                        <div className="col-md-8">
                            <textarea
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="form-control bg-transparent border border-warning rounded-0 "
                                aria-label="With textarea"
                            ></textarea>
                        </div>
                    </div>
                    <div className="row-fluid text-right p-0">
                    <button
                        type="submit"
                        className="btn btn-lg mx-auto btn-warning rounded-0 pr-3 m-2"
                        onClick={() => addCallbackRequestLocal()}
                    >
                        Request A Callback
                    </button>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
