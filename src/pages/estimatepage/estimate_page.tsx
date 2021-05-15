import { useHistory } from "react-router";
import "./estimate_page.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as https from 'https';
function generateInvoice(
    invoice: any,
    filename: any,
    success: any,
    error: any
) {
    var postData = JSON.stringify(invoice);
    var options: any = {
        hostname: "invoice-generator.com",
        port: 443,
        path: "/",
        method: "POST",
        body:postData,
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData),
        },
    };
    console.log(options)
    // fetch("https://invoice-generator.com:443", options).then((data: any) => {
    //     console.log(data);
    // });

    // var file = fs.createWriteStream(filename);

    var req = https.request(options, function(res) {
        res.on('data', function(chunk:any) {
            console.log(chunk,res)
            // file.write(chunk);
        })
        .on('end', function() {
            // file.end();

            if (typeof success === 'function') {
                success();
            }
        });
    });
    req.write(postData);
    req.end();

    if (typeof error === 'function') {
        req.on('error', error);
    }
}

var invoice = {
    logo: "http://invoiced.com/img/logo-invoice.png",
    from: "Invoiced\n701 Brazos St\nAustin, TX 78748",
    to: "Johnny Appleseed",
    currency: "inr",
    number: "INV-0001",
    payment_terms: "Auto-Billed - Do Not Pay",
    items: [
        {
            name: "[REPLACE] sexyboy abhinay",
            quantity: 2,
            unit_cost: 1000,
        },
    ],
    fields: {
        tax: "%",
    },
    tax: 5,
    notes: "Thanks for being an awesome customer!",
    terms: "No need to submit payment. You will be auto-billed for this invoice.",
};

export default function EstimatePage() {
    const history = useHistory();
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
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
                        {" "}
                        Add 100% Freee Servics{" "}
                    </Button>
                </Modal.Body>
            </Modal>
            <div className="row text-center w-100 ">
                <div className="col-lg-6 ">
                    <Button
                        onClick={() =>
                            generateInvoice(
                                invoice,
                                "invoice.pdf",
                                function () {
                                    console.log("Saved invoice to invoice.pdf");
                                },
                                function (error:any) {
                                    console.error(error);
                                }
                            )
                        }
                    >
                        PDF
                    </Button>
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
