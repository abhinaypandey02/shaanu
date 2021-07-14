import { useState,useEffect } from "react";
import { Button,  Modal } from "react-bootstrap";
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
    
    useEffect(()=>{
        if((user&&user.carProfiles.length>0))
        setCurrentCarProfile(user.carProfiles[0])
    },[user])
    useEffect(()=>{
        setShowCreateCarProfile(false)
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
            <Modal 
            
            show={showCreateCarProfile} centered onHide={() => setShowCreateCarProfile(false)} >
                <Modal.Header className='bg-warning border border-warning rounded-0 text-dark' closeButton>Create Car Profile</Modal.Header>
                <Modal.Body className='bg-dark text-warning'>
                    <CreateCarProfile />
                </Modal.Body>

            </Modal>
            <div className="row-fluid mb-4 text-center">
                <h1 className='text-warning'>YOUR PROFILE</h1>
            </div>
            {user.carProfiles.length>0&&<div className="container d-flex justify-content-center align-items-center">
                <div className='col-md-6 mb-5'>
                    <div className="text-white w-25">Current Profile</div>
                    <select className="form-control bg-warning text-dark rounded-0" onChange={e=>setCurrentCarProfile(user.carProfiles[parseInt(e.target.value)])}>
                        {user.carProfiles.map((profile,index)=><option value={index}>{profile.brand.toUpperCase()} {profile.model.toUpperCase()}</option>)}
                    </select>
                </div>
                
            </div>}
            
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="col">
                        <div className="row-fluid mt-auto">
                            {currentCarProfile&&<table className="table text-light text-center table-bordered">
                                <tbody className=''>

                                    <tr>
                                        <th className='text-warning ' scope="row">CAR'S NAME</th>
                                        <td className="text-capitalize">{currentCarProfile.brand} {currentCarProfile.model}</td>
                                    </tr>
                                    <tr>
                                        <th className='text-warning' scope="row">REGISTRATION NUMBER.</th>
                                        <td>{currentCarProfile.regNo}</td>
                                    </tr>
                                    <tr>
                                        <th className='text-warning' scope="row">NEXT SERVICE DUE DATE</th>
                                        <td>12/24/2002</td>
                                    </tr>
                                    <tr>
                                        <th className='text-warning' scope="row">INSURANCE DUE DATE</th>
                                        <td>{currentCarProfile.insuranceDate}</td>
                                    </tr>
                                </tbody>
                            </table>}
                        </div>
                        <div className="row-fluid text-center ">
                            <button onClick={() => setShowCreateCarProfile(true)} className="btn m-2 btn-warning rounded-0">
                                CREATE NEW CAR PROFILE
                            </button>
                            <button onClick={signOut} className="btn m-2 btn-danger rounded-0">
                                SIGN OUT
                            </button>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                    {currentCarProfile&&currentCarProfile.imageURL&&<img
                        src={currentCarProfile.imageURL}
                        alt={currentCarProfile.brand+currentCarProfile.model}
                        className="img-fluid w-50 m-2 border-warning border rounded-0"
                    />}
                </div>
            </div>
            <NotificationBar />
            <CarsWorkdetails />
        </div>
    );
}
