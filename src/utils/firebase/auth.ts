import fire from "./fire";

export async function signInWithEmailAndPassword(email:string,password:string){
    return await fire.auth().signInWithEmailAndPassword(email,password);
}