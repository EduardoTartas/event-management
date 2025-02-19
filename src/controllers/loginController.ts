import { newLog } from "./logController";
import { userModel } from "../model/userModel";
import * as loginService from "../services/loginService";

export let currentUser: userModel;

export async function userLogin(email: string, password: string): Promise<any> {
  loginService
    .userLogin(email, password)
    .then((resolve) => {
      if (resolve) {
        currentUser = resolve;
        console.log("User logged in successfully!");
        newLog("User logged in successfully!");
      } else {
        console.log("User not found!");
      }
    })
    .catch((reject) => console.log("Error logging in user", reject));
}
