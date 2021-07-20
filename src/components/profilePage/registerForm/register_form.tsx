import React, {useEffect, useState} from "react";
import {Button, Form, Spinner} from "react-bootstrap";
import UserInterface, {defaultUser} from "../../../interfaces/user";
import {getRecaptchaVerifier, sendSMS, signUpWithEmailAndPassword} from "../../../utils/firebase/auth";
import {createUserDocument} from "../../../utils/firebase/firestore";
import {useForm} from "react-hook-form";
import {getErrorText} from "../../../utils/globalFunctions";
import firebase from "firebase/app";
import VerifyOTP from "../../verifyOTP/verifyOTP";

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function RegisterForm() {

    const [reCaptcha, setReCaptcha] = useState<firebase.auth.RecaptchaVerifier>();
    const [phoneResult, setPhoneResult] = useState<firebase.auth.ConfirmationResult>();

    const [loading,setLoading]=useState(false);

    const {register, handleSubmit, formState: {errors}, getValues, setError,clearErrors} = useForm();

    useEffect(() => {
        const captcha = getRecaptchaVerifier("captcha");
        if (!reCaptcha) setReCaptcha(captcha);
        return () => captcha.clear();
    }, [])

    async function sendOTP():Promise<boolean>{
        if (reCaptcha){
            try{
                const result=await sendSMS("+91" + getValues("phone").toString(), reCaptcha);
                setPhoneResult(result);
                return true;
            }
            catch (err){
                setError("phone", {type: "custom", message: err.message})
                return false;
            }

        }
        return false;
    }



    function addUser({email, firstName, lastName, password, phone}: any) {
        const user: UserInterface = {

            ...defaultUser, email, firstName, lastName,phone
        }
        console.log(user)
        signUpWithEmailAndPassword(email, password).then(() => {
            createUserDocument(user)
        }).catch((error: any) => {
            switch (error.code) {
                case "auth/email-already-in-use": {
                    setError("email", {type: "custom", message: error.message});
                    break;
                }
                default: {
                    setError("confirmPassword", {type: "custom", message: error.message})
                }

            }
        })

    }
    function onSubmit(e:any){
        e.preventDefault();
        clearErrors();
        setLoading(true);
        sendOTP().then(()=>setLoading(false));
    }
    return (
        <div className="container">
            <VerifyOTP phoneResult={phoneResult} onSuccess={handleSubmit(addUser)} onHide={()=>setPhoneResult(undefined)} resendOTP={sendOTP}/>
            <div className="col-12 text-center">
                <h2 className="display-4 text-warning">Sign Up</h2>
            </div>

            <Form onSubmit={onSubmit} noValidate={true}>
                <Form.Group>
                    <Form.Label className="text-white">First Name</Form.Label>
                    <Form.Control
                        id="firstName"
                        {...register("firstName", {required: true})}
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
                        {...register("lastName", {required: true})}
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
                        {...register("email", {required: true, pattern: re})}
                        type="email"
                        className='text-light border border-warning rounded-0 bg-transparent'
                    />
                    <Form.Text className="small text-danger">
                        {getErrorText(errors.email?.type, errors.email?.message)}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-white">Phone Number</Form.Label>
                    <Form.Control
                        id="phone"
                        {...register("phone", {required: true, minLength: 10, maxLength: 10,valueAsNumber:true})}
                        type="number"
                        className='text-light border border-warning rounded-0 bg-transparent'
                    />
                    <Form.Text className="small text-danger">
                        {getErrorText(errors.phone?.type, errors.phone?.message)}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control
                        id="password"
                        {...register("password", {required: true, minLength: 6})}
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
                        id="cpassword"
                        {...register("confirmPassword", {
                            required: true, minLength: 6, validate: {
                                confirmPassword: (v) => v === getValues('password')
                            }
                        })}
                        type="password"
                        className='text-light border border-warning rounded-0 bg-transparent'
                    />
                    <Form.Text className="small text-danger">
                        {getErrorText(errors.confirmPassword?.type, errors.confirmPassword?.message)}
                    </Form.Text>
                </Form.Group>
                <div id="captcha"/>
                <Button disabled={loading} variant="warning" type="submit">
                    Sign Up
                </Button>
                {loading&&<Spinner className="m-2" animation={'border'}/>}
            </Form>
        </div>

    );
}
