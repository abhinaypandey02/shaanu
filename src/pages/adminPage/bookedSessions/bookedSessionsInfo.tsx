import React, { useState } from "react";
import { BookedSession } from "../../../interfaces/bookedSession";
import { Button } from "react-bootstrap";

interface BookedSessionWithDate extends BookedSession {
  date: Date;
}

const BookedSessionInfo = ({
  bookedSession,
  mode,
}: {
  bookedSession: BookedSessionWithDate;
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
          <td>{bookedSession.date.toLocaleString()}</td>
        </tr>
        <tr>
          <th>Token</th>
          <td>{bookedSession.token}</td>
        </tr>
        {visible && (
          <tr>
            <th>Location</th>
            <td>{bookedSession.location}</td>
          </tr>
        )}
        {visible && (
          <tr>
            <th>User Name</th>
            <td>{bookedSession.fullname}</td>
          </tr>
        )}
        {visible && (
          <tr>
            <th>User Phone</th>
            <td>{bookedSession.phone}</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default BookedSessionInfo;
