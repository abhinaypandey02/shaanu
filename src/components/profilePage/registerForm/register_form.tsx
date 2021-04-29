import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import UserInterface from "../../../interfaces/user";
import { signUpWithEmailAndPassword } from "../../../utils/firebase/auth";
import { createUserDocument } from "../../../utils/firebase/firestore";

const ERROR_MESSAGES = {
    empty: "This field cannot be empty",
    shortPassword: "The password must be of atleast length 6",
    invalidEmail: "This email is invalid",
};
function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export default function RegisterForm() {
    const [firstName, setFirstName] = useState({ value: "", error: "" });
    const [lastName, setLastName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });

    function onSubmit(e: any) {
        e.preventDefault();
        setFirstName(old=>({...old,error:''}))
        setLastName(old=>({...old,error:''}))
        setEmail(old=>({...old,error:''}))
        setPassword(old=>({...old,error:''}))
        if (firstName.value === "") {
            setFirstName({ value: "", error: ERROR_MESSAGES.empty });
            return;
        }
        if (lastName.value === "") {
            setLastName({ value: "", error: ERROR_MESSAGES.empty });
            return;
        }
        if (email.value === "") {
            setEmail({ value: "", error: ERROR_MESSAGES.empty });
            return;
        }
        if (password.value === "") {
            setEmail({ value: "", error: ERROR_MESSAGES.empty });
            return;
        }
        if (password.value.length < 6) {
            setPassword({
                value: password.value,
                error: ERROR_MESSAGES.shortPassword,
            });
            return;
        }
        if (!validateEmail(email.value)) {
            setEmail((old) => ({ ...old, error: ERROR_MESSAGES.invalidEmail }));
            return;
        }
        const user:UserInterface={
            email:email.value,firstName:firstName.value,lastName:lastName.value
        }
        signUpWithEmailAndPassword(email.value,password.value).then(()=>{
            createUserDocument(user)
        })
        
    }

    return (
        <div className="container">
        <Form onSubmit={onSubmit} noValidate>
            <Form.Group>
                <Form.Label className="text-white">First Name</Form.Label>
                <Form.Control
                    id="firstName"
                    value={firstName.value}
                    onChange={(e) =>
                        setFirstName((old) => ({
                            ...old,
                            value: e.target.value,
                        }))
                    }
                    type="text"
                />
                <Form.Text className="small text-danger">
                    {firstName.error}
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label className="text-white">Last Name</Form.Label>
                <Form.Control
                    id="lastName"
                    value={lastName.value}
                    onChange={(e) =>
                        setLastName((old) => ({
                            ...old,
                            value: e.target.value,
                        }))
                    }
                    type="text"
                />
                <Form.Text className="small text-danger">
                    {lastName.error}
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control
                    id="email"
                    value={email.value}
                    onChange={(e) =>
                        setEmail((old) => ({ ...old, value: e.target.value }))
                    }
                    type="email"
                />
                <Form.Text className="small text-danger">
                    {email.error}
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                    id="password"
                    value={password.value}
                    onChange={(e) =>
                        setPassword((old) => ({
                            ...old,
                            value: e.target.value,
                        }))
                    }
                    type="password"
                />
                <Form.Text className="small text-danger">
                    {password.error}
                </Form.Text>
            </Form.Group>
            <Button variant="outline-light" type="submit">
                Sign Up
            </Button>
        </Form>
        </div>
        
    );
}
