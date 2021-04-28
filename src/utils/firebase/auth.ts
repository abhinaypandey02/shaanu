import fire from "./fire";
import 'firebase/auth';
export async function signInWithEmailAndPassword(email:string,password:string){
    return await fire.auth().signInWithEmailAndPassword(email,password);
}
export async function signUpWithEmailAndPassword(email:string,password:string){
    return await fire.auth().createUserWithEmailAndPassword(email,password);
}