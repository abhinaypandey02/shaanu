import { CarProfile } from "./car";

export default interface UserInterface {
    email: string;
    firstName: string;
    lastName: string;
    carProfiles: CarProfile[];
    notifications:string[];
    phone:number;
}
export const defaultUser: UserInterface = {
    email: "",
    firstName: "",
    lastName: "",
    carProfiles: [],
    notifications:[],
    phone:-1
};
