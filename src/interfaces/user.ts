import { CarProfile } from "./car";

export default interface UserInterface {
    email: string;
    firstName: string;
    lastName: string;
    carProfiles: CarProfile[];
}
export const defaultUser: UserInterface = {
    email: "",
    firstName: "",
    lastName: "",
    carProfiles: [],
};
