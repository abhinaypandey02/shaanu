import React from "react";
import { BookedSession } from "../../../interfaces/bookedSession";

interface BookedSessionWithDate extends BookedSession {
  date: Date;
}

export default function BookedSessions({
  bookedSessions,
}: {
  bookedSessions: BookedSessionWithDate[];
}) {
  return (
    <div className="container">
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
            <tr key={session.id} className="row-fluid ">
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
