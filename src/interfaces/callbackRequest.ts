import UserInterface from "./user";

export default interface CallbackRequest {
    fullname: string;
    phone?: number;
    location: string;
    date:string;
    user?:UserInterface;
}
