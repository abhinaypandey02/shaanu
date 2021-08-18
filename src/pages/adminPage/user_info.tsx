import React from "react";
import UserInterface from "../../interfaces/user";
import { BookedSession } from "../../interfaces/bookedSession";
import CallbackRequest from "../../interfaces/callbackRequest";

interface BookedSessionWithDate extends BookedSession {
  date: Date;
}

export default function UserInfo({
  user,
  bookedSessions,
  callbackRequests,
}: {
  user: UserInterface;
  bookedSessions: BookedSessionWithDate[];
  callbackRequests: CallbackRequest[];
}) {
  const userBookedSessions = bookedSessions.filter(
    (session) => session.phone === user.phone
  );
  const userCallbackRequests = callbackRequests.filter(
    (session) => session.phone === user.phone
  );
  return (
    <div>
      <h3>Car Profiles</h3>
      {user.carProfiles.length === 0 && (
        <div className="text-danger">
          This user has not created any car profiles
        </div>
      )}
      {user.carProfiles.map((profile) => (
        <div className="border border-black m-2 p-2">
          <div className="text-capitalize">
            Name: {profile.brand} {profile.model}
          </div>
          <div>Registration No: {profile.regNo}</div>
        </div>
      ))}
      <hr />
      <h3>Booked Sessions</h3>
      {userBookedSessions.length === 0 && (
        <div className="text-danger">This user has not booked any sessions</div>
      )}
      {userBookedSessions.map((session) => (
        <div className="border border-black m-2 p-2">
          <div className="text-capitalize">Location: {session.location}</div>
          <div>Session Timing: {session.date.toLocaleString()}</div>
        </div>
      ))}
      <hr />
      <h3>Callback Requests</h3>
      {userCallbackRequests.length === 0 && (
        <div className="text-danger">This user has not booked any sessions</div>
      )}
      {userCallbackRequests.map((session) => (
        <div className="border border-black m-2 p-2">
          <div className="text-capitalize">Location: {session.location}</div>
          <div>Requested At: {new Date(session.date).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}
