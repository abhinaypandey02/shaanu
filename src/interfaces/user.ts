import { CarProfile } from "./car";

export default interface UserInterface {
  name: string;
  carProfiles: CarProfile[];
  phone: number;
}
export const defaultUser: UserInterface = {
  name: "",
  carProfiles: [],
  phone: -1,
};
