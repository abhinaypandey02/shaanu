import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CallbackRequest from "../../interfaces/callbackRequest";
import UserInterface from "../../interfaces/user";
import {
    getAllBookedSessions,
    getUsers,
    getCallbackRequests,
} from "../../utils/firebase/firestore";
import UserInfo from "./user_info";

export default function AdminPage() {
    const [users, setUsers] = useState<UserInterface[]>([]);
    const [bookedSessions, setBookedSessions] = useState<any[]>([]);
    const [callbackRequests, setCallbackRequests] = useState<CallbackRequest[]>(
        []
    );
    const [selectedUser, setSelectedUser] = useState<UserInterface | null>();
    useEffect(() => {
        getUsers().then((list) => setUsers(list));
        getCallbackRequests().then((list:any[]) => {
            list=list.map(ele=>({...ele,date:new Date(ele.date)}))
            list.sort((a, b) => a.date.getTime() - a.date.getTime());
            setCallbackRequests(list)
        });
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
        <div className="container">
            <div className="display-1 text-center">ADMIN CONSOLE</div>
            <Modal
                centered
                show={selectedUser}
                onHide={() => setSelectedUser(null)}
            >
                <Modal.Header closeButton>
                    {selectedUser?.firstName} {selectedUser?.lastName}
                </Modal.Header>
                <Modal.Body>
                    {selectedUser && <UserInfo user={selectedUser} />}
                </Modal.Body>
            </Modal>
            <div className="row-fluid p-3 text-center text-light">
                <h1>USERS</h1>
            </div>
            {users.map((user) => (
                <div
                    onClick={() => setSelectedUser(user)}
                    className="row-fluid pointer-on-hover"
                >
                    <div className="col-6  mx-auto">
                        <div
                            className="card mb-3 text-light border-light"
                            style={{ maxWidth: 540 }}
                        >
                            <div className="row">
                                <div className="col-md-4 my-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                        className="img-fluid "
                                        alt="..."
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {user.firstName} {user.lastName}
                                        </h5>
                                        <p className="card-text">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="row-fluid p-3 text-center text-light">
                <h1>BOOKED SESSIONS</h1>
            </div>
            {bookedSessions.map((session) => (
                <div className="row-fluid ">
                    <div className="col-6  mx-auto">
                        <div
                            className="card mb-3 text-light border-light"
                            style={{ maxWidth: 540 }}
                        >
                            <div className="row">
                                <div className="col-12">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {session.fullname}
                                        </h5>
                                        <p className="card-text">
                                            {session.location}
                                        </p>
                                        <p className="card-text">
                                            {session.phone}
                                        </p>
                                        <p className="card-text">
                                            {session.date.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="row-fluid p-3 text-center text-light">
                <h1>CALLBACK REQUESTS</h1>
                
            </div>
            {callbackRequests.map((request) => (
                <div className="row-fluid ">
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
    );
}
