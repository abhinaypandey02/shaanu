import fire from "./fire";
import 'firebase/storage';
import {v4 as uuid} from 'uuid';
export const uploadButtonImage=async (user:any,file:any)=>{
    const ref=fire.storage().ref(`${user.email}/buttonImage/${uuid()}${file.name}`);
    await ref.put(file);
    return await ref.getDownloadURL();
}
export const uploadPDF=async (user:any,file:any)=>{
    const ref=fire.storage().ref(`${user.email}/pdf/${uuid()}${file.name}`);
    await ref.put(file);
    return await ref.getDownloadURL();
}