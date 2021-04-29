import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import LoginForm from "../../components/profilePage/loginForm/login_form";
import RegisterForm from "../../components/profilePage/registerForm/register_form";
import { useUser } from "../../contexts/user_context";

import CarsWorkdetails from "../../components/carsWorkdetails/cars_workdetails";
import NotificationBar from "../../components/notificationbar/notification_bar";
import { signOut } from "../../utils/firebase/auth";
import CreateCarProfile from "../../components/createCarProfile/create_car_profile";


export default function ProfilePage() {
    const [user] = useUser();
    const [signIn, setSignIn] = useState(false);
    const [showCreateCarProfile,setShowCreateCarProfile]=useState(false);
    if (!user) {
        if (signIn) {
            return (
                <div className='text-light mt-3 container'>
                    <LoginForm />
                    <div>New User? <Button variant="link" onClick={()=>setSignIn(false)}>Sign Up</Button></div>
                </div>
            );
        }
        return (
            <div className='text-light p-3 container'>
                <RegisterForm />
                <div className='mt-3'>Existing User? <Button variant="link" onClick={()=>setSignIn(true)}>Sign In</Button></div>

            </div>
        );
    }
    return (
        <div className="container-fluid">
            <Modal show={showCreateCarProfile} centered onHide={()=>setShowCreateCarProfile(false)} >
                <Modal.Header closeButton>Create Car Profile</Modal.Header>
                <Modal.Body>
                <CreateCarProfile/>
                </Modal.Body>
                
                </Modal>
            <div className="row-fluid mb-4 text-center">
                <h1 className='text-light'>PROFILE</h1>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="col">
                        <div className="row-fluid mt-auto">
                            <table className="table text-light text-center table-bordered">
                                <tbody>
                                    <tr>
                                        <th scope="col">CAR'S NAME</th>
                                        <td>MARUZIT USUKI MARU</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">REGISTRATION NUMBER.</th>
                                        <td>2135315135135</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NEXT SERVICE DUE DATE</th>
                                        <td> 13/032/202123</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">INSURANCE DUE DATE</th>
                                        <td>13/03/2212</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row-fluid  text-center mb-auto">
                            <button onClick={()=>setShowCreateCarProfile(true)} className="btn mx-auto btn-light">
                                CREATE NEW CAR PROFILE
                            </button>
                            <button onClick={signOut} className="btn ml-3 btn-danger">
                               SIGN OUT
                            </button>
                        </div>
                        </div>
                   
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img
                        src="https://images.unsplash.com/photo-1519440862171-af26cf8c2a85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
                        className="img-fluid w-75 border rounded-lg"
                    />
                </div>
            </div>
            <NotificationBar />
            <CarsWorkdetails />
        </div>
    );
}
