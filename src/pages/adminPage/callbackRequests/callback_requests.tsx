import React, { useEffect, useState } from 'react'
import CallbackRequest from '../../../interfaces/callbackRequest';
import { getCallbackRequests } from '../../../utils/firebase/firestore';

export default function CallbackRequests() {
    const [callbackRequests, setCallbackRequests] = useState<CallbackRequest[]>(
        []
    );
    useEffect(() => {
        getCallbackRequests().then((list:any[]) => {
            list=list.map(ele=>({...ele,date:new Date(ele.date)}))
            list.sort((a, b) => a.date.getTime() - a.date.getTime());
            setCallbackRequests(list)
        });
    }, []);
    return (
        <div>
            <div className="row-fluid p-3 text-center text-light">
                <h1>CALLBACK REQUESTS</h1>
                
            </div>
            {callbackRequests.map((request) => (
                <div key={request.date} className="row-fluid ">
                    <div className="col-6  mx-auto">
                        <div
                            className="card mb-3 text-light border-light"
                            style={{ maxWidth: 540 }}
                        >
                            <div className="row">
                                <div className="col-12">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {request.fullname}
                                        </h5>
                                        <p className="card-text">
                                            {request.location}
                                        </p>
                                        <p className="card-text">
                                            {request.phone}
                                        </p>
                                        <p className="card-text">
                                            {request.date.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
