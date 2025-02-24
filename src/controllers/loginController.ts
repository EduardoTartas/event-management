import { newLog } from "./logController";
import { userModel } from "../model/userModel";
import * as loginService from "../services/loginService";

export let currentUser: userModel | null = null;

export async function userLogin(email: string, password: string): Promise<any> {
  try {
    const resolve = await loginService.userLogin(email, password);
    if (resolve) {
      currentUser = resolve;
      console.log("User logged in successfully!");
      newLog("User logged in successfully!");
    } else {
      console.log("User not found!");
    }
  } catch (error) {
    console.log("Error logging in user", error);
    newLog("Error logging in user");
  }
}
