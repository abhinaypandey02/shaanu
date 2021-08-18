import React from "react";
import CallbackRequest from "../../../interfaces/callbackRequest";

export default function CallbackRequests({
  callbackRequests,
}: {
  callbackRequests: CallbackRequest[];
}) {
  return (
    <div className="container">
      <div className="row-fluid p-3 text-center text-light">
        <h1>CALLBACK REQUESTS</h1>
      </div>
      {callbackRequests.map((request) => (
        <div key={request.date} className="row-fluid ">
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
