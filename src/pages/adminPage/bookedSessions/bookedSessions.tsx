import React, { useEffect, useState } from 'react'
import { BookedSession } from '../../../interfaces/bookedSession';
import { getAllBookedSessions } from '../../../utils/firebase/firestore';

interface BookedSessionWithDate extends BookedSession{
    date:Date
}

export default function BookedSessions({setTab}:{setTab:Function}) {
    const [bookedSessions, setBookedSessions] = useState<BookedSessionWithDate[]>([]);
    useEffect(() => {
        getAllBookedSessions().then((list: any[]) => {
            list = list.map((ele) => ({
                ...ele,
                date: new Date(
                    ele.year,
                    ele.month - 1,
                    ele.day,
                    ele.hours,
                    ele.minutes,
                    0
                ),
            }));
            list.sort((a, b) => a.date.getTime() - a.date.getTime());
            setBookedSessions(list);
        });
    }, []);
    return (
        <div>
            <div className="row-fluid p-3 text-center text-light">
                <h1>Booked Sessions</h1>
            </div>
            <table className="text-white">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Location</th>
                    </tr>
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
    )
}
