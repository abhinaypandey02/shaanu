import { useState,useEffect } from "react";
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
    const [showCreateCarProfile, setShowCreateCarProfile] = useState(false);
    const [currentCarProfile,setCurrentCarProfile]=useState(((user&&user.carProfiles.length>0)?user.carProfiles[0]:null))
    console.log(user&&user.carProfiles,currentCarProfile)
    useEffect(()=>{
        if((user&&user.carProfiles.length>0))
        setCurrentCarProfile(user.carProfiles[0])
    },[user])
    if (!user) {
        if (signIn) {
            return (
                <div className='text-light mt-3 container'>
                    <LoginForm />
                    <div className='mt-2 w-100 text-center  p-2'>
                        <div className="hi">
                            New User? <Button variant="link" onClick={() => setSignIn(false)}>Sign Up</Button>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className='text-light mt-3 container'>
                <RegisterForm />
                <div className='mt-2 w-100 text-center  p-2'>
                    <div className="hi">Existing User? <Button variant="link" onClick={() => setSignIn(true)}>Sign In</Button></div>
                </div>

            </div>
        );
    }
    return (
        <div className="container-fluid">
            <Modal show={showCreateCarProfile} centered onHide={() => setShowCreateCarProfile(false)} >
                <Modal.Header closeButton>Create Car Profile</Modal.Header>
                <Modal.Body>
                    <CreateCarProfile />
                </Modal.Body>

            </Modal>
            <div className="row-fluid mb-4 text-center">
                <h1 className='text-light'>PROFILE</h1>
            </div>
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="col">
                        <div className="row-fluid mt-auto">
                            {currentCarProfile&&<table className="table text-light text-center table-bordered">
                                <tbody>
                                    <tr>
                                        <th scope="col">CAR'S NAME</th>
                                        <td>{currentCarProfile.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">REGISTRATION NUMBER.</th>
                                        <td>{currentCarProfile.regNo}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NEXT SERVICE DUE DATE</th>
                                        <td>12/24/2002</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">INSURANCE DUE DATE</th>
                                        <td>{currentCarProfile.insuranceDate}</td>
                                    </tr>
                                </tbody>
                            </table>}
                        </div>
                        <div className="row-fluid text-center ">
                            <button onClick={() => setShowCreateCarProfile(true)} className="btn m-2 btn-light">
                                CREATE NEW CAR PROFILE
                            </button>
                            <button onClick={signOut} className="btn m-2 btn-danger">
                                SIGN OUT
                            </button>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                    {currentCarProfile&&currentCarProfile.imageURL&&<img
                        src={currentCarProfile.imageURL}
                        className="img-fluid w-75 m-2 border rounded-lg"
                    />}
                </div>
            </div>
            <NotificationBar />
            <CarsWorkdetails />
        </div>
    );
}
