import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function FreeServices() {
    const [showConfirmationModal,setShowConfirmationModal]=useState(false);
    return (
        <div className="container-fluid">
            <Modal centered={true} show={showConfirmationModal} onHide={()=>setShowConfirmationModal(false)}>
                <Modal.Header closeButton={true}>

                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
            <div className="row-fluid text-light text-center">
                <h1>CHOOSE ANY FREE SERVICE</h1>
            </div>
            <div className="row">
                <div className="col-md-6 text-light">
                    <div className="col d-flex flex-wrap flex-column">
                <h1>GROUP 1</h1>
                <div className="row-fluid justify-content-center d-flex">
                    <ul className="list-group p-3 ">
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                     
                    </ul>
                    </div>
                    </div>
                    <div className="col d-flex flex-wrap flex-column">
                <h1>GROUP 2</h1>
                <div className="row-fluid justify-content-center d-flex">
                    <ul className="list-group p-3 ">
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                     
                    </ul>
                    </div>
                    </div>
                    <div className="col d-flex flex-wrap flex-column">
                <h1>GROUP 3</h1>
                <div className="row-fluid justify-content-center d-flex">
                    <ul className="list-group p-3 ">
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                     
                    </ul>
                    </div>
                    </div>
                    <div className="col d-flex flex-wrap flex-column">
                <h1>GROUP 4</h1>
                <div className="row-fluid justify-content-center d-flex">
                    <ul className="list-group p-3 ">
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                        <li className="list-group-item bg-dark">
                            <div className="col my-2">
                            <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                First checkbox
                                </div>
                        </li>
                     
                    </ul>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <Button onClick={()=>setShowConfirmationModal(true)} variant='outline-light btn-lg m-3'>BOOK FREE APPOINTMENT</Button>
                </div>
            </div>
        </div>
    )
}