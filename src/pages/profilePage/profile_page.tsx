<<<<<<< Updated upstream
import { useState } from "react";
import { Form } from "react-bootstrap";
import LoginForm from "../../components/profilePage/loginForm/login_form";
import RegisterForm from "../../components/profilePage/registerForm/register_form";
import { useUser } from "../../contexts/user_context";
=======

import CarsWorkdetails from "../../components/carsWorkdetails/cars_workdetails";
import NotificationBar from "../../components/notificationbar/notification_bar";

>>>>>>> Stashed changes

export default function ProfilePage() {
    const [user] = useUser();
    const [signIn, setSignIn] = useState(true);
    if (!user) {
        if (signIn) {
            return (
                <div>
                    <LoginForm />
                </div>
            );
        }
        return (
            <div>
                <RegisterForm />
            </div>
        );
    }
    return (
        <div className="container-fluid">
            <div className="row text-center mb-3">
                <button className="btn mx-auto btn-light">
                    CREATE NEW CAR PROFILE
                </button>
            </div>
s
            <div className="row">
                <div className="col-md-6">
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
                <div className="col-md-6">
                    <img
                        src="https://images.unsplash.com/photo-1519440862171-af26cf8c2a85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
                        className="img-fluid border rounded-lg"
                    />
                </div>
            </div>
            <NotificationBar/>
            <CarsWorkdetails/>
        </div>
    );
}
