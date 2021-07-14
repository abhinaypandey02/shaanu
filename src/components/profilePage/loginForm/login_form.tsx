import React from "react";
import { Form, Button } from "react-bootstrap";
import { signInWithEmailAndPassword } from "../../../utils/firebase/auth";
import {useForm} from "react-hook-form";
import {getErrorText} from "../../../utils/globalFunctions";
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default function LoginForm() {
    const {register,handleSubmit,formState:{errors},setError}=useForm();
    function onSubmit({email,password}: any) {
        signInWithEmailAndPassword(email,password).catch(error=>{
            switch(error.code){
                case "auth/wrong-password":{
                    setError("password",{type:"custom",message:"Invalid Password"})
                    break;
                }
                case "auth/user-not-found":{
                    setError("email",{type:"custom",message:"No such user exists"})
                    break;
                }
                default:{
                    setError("password",{type:"custom",message:error.message})
                }
            }
        })
    }

    return (
        <div className="container">
            <div className="col-12 text-center">
            <h2 className="display-4 text-warning">Log In</h2>
            </div>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <Form.Group>
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control
                    id="email"
                    {...register("email",{required:true,pattern:re})}
                    type="email"
                    className='text-light border border-warning rounded-0 bg-transparent'
                />
                <Form.Text className="small text-danger">
                    {getErrorText(errors.email?.type,errors.email?.message)}
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                    id="password"
                    {...register("password",{required:true,minLength:6})}
                    type="password"
                    className='text-light border border-warning rounded-0 bg-transparent'
                />
                <Form.Text className="small text-danger">
                    {getErrorText(errors.password?.type,errors.password?.message)}
                </Form.Text>
            </Form.Group>
            <Button variant="warning" type="submit">
                Log In
            </Button>
        </Form>
        </div>
    );
}
