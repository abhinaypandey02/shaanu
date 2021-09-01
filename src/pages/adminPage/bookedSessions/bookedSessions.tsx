import React, { useState } from "react";
import { BookedSession } from "../../../interfaces/bookedSession";
import { Button, Modal } from "react-bootstrap";
import BookedSessionInfo from "./bookedSessionsInfo";

interface BookedSessionWithDate extends BookedSession {
  date: Date;
}

export default function BookedSessions({
  bookedSessions,
}: {
  bookedSessions: BookedSessionWithDate[];
}) {
  const [freeOnly, setFreeOnly] = useState(false);
  const [currentSession, setCurrentSession] = useState<BookedSessionWithDate>();
  if (freeOnly)
    bookedSessions = bookedSessions.filter(
      (sess) => sess.freeServices.length > 0
    );
  return (
    <div className="container">
      <Modal
        centered
        show={currentSession}
        onHide={() => setCurrentSession(undefined)}
      >
        <Modal.Header closeButton>
          {currentSession?.fullname}'s Booked Session
        </Modal.Header>
        <Modal.Body>
          {currentSession && (
            <BookedSessionInfo mode="auto" bookedSession={currentSession} />
          )}
        </Modal.Body>
      </Modal>
      <div className="row-fluid p-3 text-center text-light">
        <h1>Booked Sessions</h1>
      </div>
      <Button
        className="my-2 rounded-0"
        variant={"warning"}
        onClick={() => setFreeOnly((old) => !old)}
      >
        {freeOnly ? "All Sessions" : "Free Services Only"}
      </Button>
      <table className="table text-white">
        <thead className="alert alert-dark">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Time</th>
            <th>Free Services</th>
          </tr>
        </thead>
        <tbody>
          {bookedSessions.map((session) => (
            <tr
              onClick={() => setCurrentSession(session)}
              key={session.id}
              className="row-fluid pointer-on-hover"
            >
              <td>{session.fullname}</td>
              <td>{session.phone}</td>
              <td>{session.location}</td>
              <td>{new Date(session.dateTime).toLocaleString()}</td>
              <td>{session.freeServices.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
