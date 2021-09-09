import React from "react"
import UserInterface from "../../../interfaces/user"
import { BookedSession } from "../../../interfaces/bookedSession"
import CallbackRequest from "../../../interfaces/callbackRequest"
import BookedSessionInfo from "../bookedSessions/bookedSessionsInfo"
import CallbackRequestInfo from "../callbackRequests/callbackRequestInfo"
import CarProfileCard from "./carProfileCard"

interface BookedSessionWithDate extends BookedSession {
    date: Date;
}

export default function UserInfo({
                                     user,
                                     bookedSessions,
                                     callbackRequests
                                 }: {
    user: UserInterface;
    bookedSessions: BookedSessionWithDate[];
    callbackRequests: CallbackRequest[];
}) {
    const userBookedSessions = bookedSessions.filter(
        (session) => session.phone === user.phone
    )
    const userCallbackRequests = callbackRequests.filter(
        (session) => session.phone === user.phone
    )
    return (
        <div>
            <div className={"my-3"}>
                <table className={"my-3"}>
                    <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{user.phone}</td>
                    </tr>
                </table>
            </div>

            <h3>Car Profiles</h3>
            {user.carProfiles.length === 0 && (
                <div className="text-danger">
                    This user has not created any car profiles
                </div>
            )}
            {user.carProfiles.map((profile) => (
                <div key={profile.id} className="border border-black m-2 p-2">
                    <CarProfileCard profile={profile} mode="auto" />
                </div>
            ))}
            <hr />
            <h3>Booked Sessions</h3>
            {userBookedSessions.length === 0 && (
                <div className="text-danger">This user has not booked any sessions</div>
            )}
            {userBookedSessions.map((session) => (
                <div key={session.id} className="border border-black m-2 p-2">
                    <BookedSessionInfo mode="auto" bookedSession={session} />
                </div>
            ))}
            <hr />
            <h3>Callback Requests</h3>
            {userCallbackRequests.length === 0 && (
                <div className="text-danger">This user has not booked any sessions</div>
            )}
            {userCallbackRequests.map((request) => (
                <div key={request.id} className="border border-black m-2 p-2">
                    <CallbackRequestInfo mode="auto" callbackRequest={request} />
                </div>
            ))}
        </div>
    )
}
