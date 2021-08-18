import React, { useState } from "react";
import { BookedSession } from "../../../interfaces/bookedSession";
import { Modal } from "react-bootstrap";
import BookedSessionInfo from "./bookedSessionsInfo";

interface BookedSessionWithDate extends BookedSession {
  date: Date;
}

export default function BookedSessions({
  bookedSessions,
}: {
  bookedSessions: BookedSessionWithDate[];
}) {
  const [currentSession, setCurrentSession] = useState<BookedSessionWithDate>();
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
      <table className="table text-white">
        <thead className="alert alert-dark">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {bookedSessions.map((session) => (
            <tr
              onClick={() => setCurrentSession(session)}
              key={session.id}
              className="row-fluid "
            >
              <td>{session.fullname}</td>
              <td>{session.phone}</td>
              <td>{session.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
