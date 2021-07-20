import fire from "./fire";
import 'firebase/auth';
import firebase from "firebase/app";

export async function signInWithEmailAndPassword(email: string, password: string) {
    return await fire.auth().signInWithEmailAndPassword(email, password);
}

export async function signUpWithEmailAndPassword(email: string, password: string) {
    return await fire.auth().createUserWithEmailAndPassword(email, password);
}

export async function signOut() {
    return await fire.auth().signOut();
}

export async function sendSMS(phoneNumber:string,reCaptcha:firebase.auth.ApplicationVerifier){
    return await fire.auth().signInWithPhoneNumber(phoneNumber,reCaptcha);
}

export const getRecaptchaVerifier = (buttonRef: string) => new firebase.auth.RecaptchaVerifier(buttonRef, {
    size: 'invisible'
})