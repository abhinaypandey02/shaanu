import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import UserInterface from '../../../interfaces/user';
import { getUsers } from '../../../utils/firebase/firestore';
import UserInfo from '../user_info';

export default function UsersTab() {
    const [users, setUsers] = useState<UserInterface[]>([]);
    const [selectedUser, setSelectedUser] = useState<UserInterface | null>();

    useEffect(() => {
        getUsers().then((list) => setUsers(list));
    }, []);
    return (
        <div>
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
                    key={user.email}
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
        </div>
    )
}
