import { useHistory } from "react-router";
import "./estimate_page.css";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useGlobalState } from "../../contexts/global_state";
import { useUser } from "../../contexts/user_context";

export default function EstimatePage() {
    const history = useHistory();
    const [{ cart }] = useGlobalState();
    const [user] = useUser();
    console.log(cart);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [link, setLink] = useState("");

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
        fetch("http://localhost:8000/", {
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
    }, [user,cart]);
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
                        style={{height:1000}}
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
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                            PHONE NUMBER
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                            LOCATION
                        </div>
                        <div className="col-6 ">
                            <textarea
                                className="form-control"
                                aria-label="With textarea"
                            ></textarea>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-lg mx-auto btn-outline-light m-3"
                        onClick={() => setShowConfirmationModal(true)}
                    >
                        Request A Callback
                    </button>
                </div>
            </div>
        </div>
    );
}
