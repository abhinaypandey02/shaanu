import UserInterface, { defaultUser } from "../../interfaces/user";
import fire from "./fire";
import "firebase/firestore";
import { CarProfile } from "../../interfaces/car";
import { BookedSession } from "../../interfaces/bookedSession";
export async function createUserDocument(user_data: UserInterface) {
    await fire
        .firestore()
        .collection("users")
        .doc(user_data.email)
        .set(user_data);
}

export async function getUserDocument(
    email: string
): Promise<UserInterface | null> {
    let user_doc: UserInterface | null = null;
    const doc = await fire.firestore().collection("users").doc(email).get();
    if (doc && doc.exists) {
        const doc_data = doc.data();
        user_doc = {
            ...defaultUser,
            ...doc_data,
        };
    }
    return user_doc;
}
export async function addCarProfile(
    user: UserInterface,
    carProfile: CarProfile
) {
    await fire
        .firestore()
        .collection("users")
        .doc(user.email)
        .update({ carProfiles: [...user.carProfiles, carProfile] });
}

export async function addBookedSession(session:BookedSession){
    return await fire.firestore().collection('bookedSessions').add(session);
}
export async function getBookedSessionsByMonth(month:number){

    const data=await fire.firestore().collection("bookedSessions").where('month','==',month).get();

    if(!data.empty&&data.docs.length>0){
        const temp:any=[];
        data.docs.forEach(doc=>{
            temp.push(doc.data())
        })
        return temp;
    } 
    return [];
}