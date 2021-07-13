import {useHistory} from "react-router";
import "./estimate_page.css";
import {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useGlobalState} from "../../contexts/global_state";
import {useUser} from "../../contexts/user_context";
import {addCallbackRequest} from "../../utils/firebase/firestore";
import CallbackRequest from "../../interfaces/callbackRequest";
import {useForm} from "react-hook-form";

export default function EstimatePage() {
    const history = useHistory();
    const [{cart}] = useGlobalState();
    const [user] = useUser();
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [link, setLink] = useState("");
    const {register,handleSubmit} = useForm();
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [notLoggedInModalShow,setNotLoggedInModalShow]=useState(false);

    function onDownload(){
        if(user){
            document.getElementById('downloadInvoice')?.click();
        } else {
            console.log(2)
            setNotLoggedInModalShow(true);
        }
    }

    function addCallbackRequestLocal() {
        const request: CallbackRequest = {fullname, phone, location, date: new Date().toISOString()};
        addCallbackRequest(request).then(() => {
            setFullname("");
            setPhone("");
            setLocation("");
            setShowConfirmationModal(true);
        });
    }

    useEffect(() => {
        if (cart.length === 0) {
            history.push('/')
            return;
        }
        const dataToSend = {
            items: cart.map((item) => ({
                name: `${item.service.name} for ${item.brand.toUpperCase()} ${item.model.toUpperCase()} (${item.fuel.toUpperCase()})`,
                quantity: 1,
                unit_cost: item.service.price,
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
                    new Blob([new Uint8Array(res)], {type: "application/pdf"})
                );
                setLink(tempLink);
            });
        });
    }, [user, cart]);
    return (
        <div className="container-fluid d-flex flex-grow-1  justify-content-center align-items-center"
             id='allpagesection'>
            <Modal
                contentClassName='bg-dark border border-warning p-0 rounded-0'
                centered={true}
                show={showConfirmationModal}
                onHide={() => setShowConfirmationModal(false)}
            >
                <Modal.Header className='bg-warning rounded-0' closeButton={true}/>
                <Modal.Body className="text-center text-warning">
                    <h1>THANKS FOR CHOOSING</h1>
                    <h1>CAR PLUS</h1>

                    <Button className='btn-warning rounded-0' onClick={() => history.push("/freeservices")}>
                        Add 100% Free Servics
                    </Button>
                </Modal.Body>
            </Modal>
            <Modal
                contentClassName='bg-dark border border-warning p-0 rounded-0'
                centered={true}
                show={notLoggedInModalShow}
                onHide={() => setNotLoggedInModalShow(false)}
            >
                <Modal.Header className='bg-warning rounded-0' closeButton={true}>NOT LOGGED IN</Modal.Header>
                <Modal.Body className="text-center text-warning">
                    <h1>login krle </h1>

                </Modal.Body>
            </Modal>
            <div className="row text-center w-100 ">
                <div className="col-lg-6 ">
                    {link !== "" && (
                        <iframe
                            style={{height: 1000}}
                            className="w-100 "
                            title="pdf"
                            src={link}
                        />
                    )}
                    {link !== "" && (
                        <a
                            download="invoice.pdf"
                            href={link}
                            id="downloadInvoice"

                            className="d-none"
                        />

                    )}
                    {link!==""&&(
                        <button onClick={onDownload} className="btn btn-outline-light m-3">
                            DOWNLOAD PDF2
                        </button>
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
                    <br/>
                    <div className="container pl-2 alert alert-warning rounded-0">
                        <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
                            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                                FULL NAME
                            </div>
                            <div className="col-md-8">
                                <input
                                    {...register("fullname")}
                                    className="form-control bg-transparent border border-warning rounded-0 "
                                />
                            </div>
                        </div>
                        <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                                PHONE NUMBER
                            </div>
                            <div className="col-md-8">
                                <input
                                    {...register("phone")}
                                    className="form-control bg-transparent border border-warning rounded-0 "
                                />
                            </div>
                        </div>
                        <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
                            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                                LOCATION
                            </div>
                            <div className="col-md-8">
                            <textarea
                                {...register("location")}
                                className="form-control bg-transparent border border-warning rounded-0 "
                                aria-label="With textarea"
                            />
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
