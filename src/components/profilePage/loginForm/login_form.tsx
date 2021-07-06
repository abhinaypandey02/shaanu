import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { signInWithEmailAndPassword } from "../../../utils/firebase/auth";

const ERROR_MESSAGES = {
    empty: "This field cannot be empty",
    shortPassword: "The password must be of atleast length 6",
    invalidEmail: "This email is invalid",
};
function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export default function LoginForm() {
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });

    function onSubmit(e: any) {
        e.preventDefault();
        setEmail(old=>({...old,error:''}))
        setPassword(old=>({...old,error:''}))
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
        signInWithEmailAndPassword(email.value,password.value).then(()=>console.log("done"))
    }

    return (
        <div className="container">
            <div className="col-12 text-center">
            <h2 className="display-4 text-warning">Log In</h2>
            </div>
        <Form onSubmit={onSubmit} noValidate>
            <Form.Group>
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control
                    id="email"
                    value={email.value}
                    onChange={(e) =>
                        setEmail((old) => ({ ...old, value: e.target.value }))
                    }
                    type="email"
                    className='text-light border border-warning rounded-0 bg-transparent'
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
                    className='text-light border border-warning rounded-0 bg-transparent'
                />
                <Form.Text className="small text-danger">
                    {password.error}
                </Form.Text>
            </Form.Group>
            <Button variant="warning" type="submit">
                Log In
            </Button>
        </Form>
        </div>
    );
}
