import { Cart } from "../contexts/global_state";
import UserInterface from "./user";

export interface Checkout {
  cart: Cart[];
  timestamp: number;
  user: UserInterface["phone"];
}
