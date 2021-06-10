import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { BookedSession } from '../../../interfaces/bookedSession';
import { getAllBookedSessions } from '../../../utils/firebase/firestore';

interface BookedSessionWithDate extends BookedSession{
    date:Date
}

export default function JobsTab({setTab}:{setTab:Function}) {
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
                <h1>JOBS</h1>
            </div>
            <div>
                <Button onClick={()=>setTab("addJob")}>Add Job</Button>
            </div>
            <table className="text-white">
                <tbody>
                    <tr>
                        <th>Job Card No.</th>
                        <th>Reg No.</th>
                        <th>Status</th>
                        <th>Service Type</th>
                        <th>Vehicle</th>
                    </tr>
                    {bookedSessions.map((session) => (
                <tr key={session.id} className="row-fluid ">
                    <td>{session.id}</td>
                    <td>{session.id}</td>
                    <td>{session.fullname}</td>
                </tr>
            ))}
                
                </tbody>
            </table>
            
        </div>
    )
}
