import React, { useState } from "react";
import CallbackRequest from "../../../interfaces/callbackRequest";
import { Modal } from "react-bootstrap";
import CallbackRequestInfo from "./callbackRequestInfo";

export default function CallbackRequests({
  callbackRequests,
}: {
  callbackRequests: CallbackRequest[];
}) {
  const [currentRequest, setCurrentRequest] = useState<CallbackRequest>();
  return (
    <div className="container">
      <Modal
        centered
        show={currentRequest}
        onHide={() => setCurrentRequest(undefined)}
      >
        <Modal.Header closeButton>{currentRequest?.phone}</Modal.Header>
        <Modal.Body>
          {currentRequest && (
            <CallbackRequestInfo mode="auto" callbackRequest={currentRequest} />
          )}
        </Modal.Body>
      </Modal>
      <div className="row-fluid p-3 text-center text-light">
        <h1>CALLBACK REQUESTS</h1>
      </div>
      {callbackRequests.map((request) => (
        <div
          onClick={() => setCurrentRequest(request)}
          key={request.date}
          className="row-fluid "
        >
          <div className="col-12 mx-auto">
            <div
              className="card mx-auto mb-3 text-light border-light"
              style={{ maxWidth: 540 }}
            >
              <div className="row">
                <div className="col-12">
                  <div className="card-body">
                    <h5 className="card-title">{request.fullname}</h5>
                    <p className="card-text">{request.location}</p>
                    <p className="card-text">{request.phone}</p>
                    <p className="card-text">{request.date.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
