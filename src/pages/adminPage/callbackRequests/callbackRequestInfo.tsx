import React, { useState } from "react";
import CallbackRequest from "../../../interfaces/callbackRequest";
import { Button } from "react-bootstrap";

const CallbackRequestInfo = ({
  callbackRequest,
  mode,
}: {
  callbackRequest: CallbackRequest;
  mode: "compact" | "full" | "auto";
}) => {
  const [moreInfo, setMoreInfo] = useState(false);
  let visible = false;
  if (mode === "full") visible = true;
  else if (mode === "auto") visible = moreInfo;
  return (
    <div>
      {mode === "auto" && (
        <Button onClick={() => setMoreInfo((o) => !o)}>
          {moreInfo ? "- Less " : "+ More "} Info
        </Button>
      )}
      <table className={"my-3"}>
        <tr>
          <th>Booked Time</th>
          <td>{new Date(callbackRequest.date).toLocaleString()}</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>{callbackRequest.location}</td>
        </tr>
        {visible && (
          <tr>
            <th>User Name</th>
            <td>{callbackRequest.fullname}</td>
          </tr>
        )}

        {visible && (
          <tr>
            <th>User Phone</th>
            <td>{callbackRequest.phone}</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default CallbackRequestInfo;
