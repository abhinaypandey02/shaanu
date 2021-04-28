import UserInterface, { defaultUser } from "../../interfaces/user";
import fire from "./fire";
import 'firebase/firestore';
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
