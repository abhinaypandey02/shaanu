import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import UserInterface, { defaultUser } from "../../../interfaces/user";
import { signUpWithEmailAndPassword } from "../../../utils/firebase/auth";
import { createUserDocument } from "../../../utils/firebase/firestore";
import {useForm} from "react-hook-form";
import {getErrorText} from "../../../utils/globalFunctions";

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function RegisterForm() {
    const {register,handleSubmit,formState:{errors},getValues}=useForm();

    function onSubmit({email,firstName,lastName,password}: any) {
        // const user:UserInterface={
        //     ...defaultUser,email,firstName,lastName
        // }
        // signUpWithEmailAndPassword(email,password).then(()=>{
        //     createUserDocument(user)
        // })
        //
    }

    return (
        <div className="container">
            <div className="col-12 text-center">
            <h2 className="display-4 text-warning">Sign Up</h2>
            </div>
            
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label className="text-white">First Name</Form.Label>
                <Form.Control
                    id="firstName"
                    {...register("firstName",{required:true})}
                    className='text-light border border-warning rounded-0 bg-transparent'
                />
                <Form.Text className="small text-danger">
                    {getErrorText(errors.firstName?.type)}
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label className="text-white">Last Name</Form.Label>
                <Form.Control
                    id="lastName"
                    {...register("lastName",{required:true})}
                    className='text-light border border-warning rounded-0 bg-transparent'
                />
                <Form.Text className="small text-danger">
                    {getErrorText(errors.lastName?.type)}
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control
                    id="email"
                    {...register("email",{required:true,pattern:re})}
                    type="email"
                    className='text-light border border-warning rounded-0 bg-transparent'
                />
                <Form.Text className="small text-danger">
                    {getErrorText(errors.email?.type)}
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
                    {getErrorText(errors.password?.type)}
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label className="text-white">Confirm Password</Form.Label>
                <Form.Control
                    id="password"
                    {...register("confirmPassword",{required:true,minLength:6,validate:{
                        confirmPassword:(v)=>v===getValues('password')
                        }})}
                    type="password"
                    className='text-light border border-warning rounded-0 bg-transparent'
                />
                <Form.Text className="small text-danger">
                    {getErrorText(errors.confirmPassword?.type)}
                </Form.Text>
            </Form.Group>
            <Button variant="warning" type="submit">
                Sign Up
            </Button>
        </Form>
        </div>
        
    );
}
