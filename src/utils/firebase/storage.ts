import fire from "./fire";
import "firebase/storage";
import { v4 as uuid } from "uuid";
import UserInterface from "../../interfaces/user";

export const uploadButtonImage = async (user: any, file: any) => {
  const ref = fire
    .storage()
    .ref(`+91${user.phone}/buttonImage/${uuid()}${file.name}`);
  await ref.put(file);
  return await ref.getDownloadURL();
};
export const uploadDocuments = async (user: any, file: any) => {
  const ref = fire.storage().ref(`+91${user.phone}/docs/${file.name}`);
  await ref.put(file);
  return await ref.getDownloadURL();
};

export async function deleteFile(user: UserInterface, fileName: string) {
  return await fire.storage().ref(`+91${user.phone}/docs/${fileName}`).delete();
}
