import { userModel } from "../model/userModel";
import * as userService from "../services/userService";
import { validateUser } from "../utils/validations";
import { newLog } from "./logController";
import { v4 as uuid } from 'uuid';

export function insertIntoUser(name: string, email: string, password: string): void {
  const user: userModel = {
    id: uuid(),
    name: name,
    email: email,
    password: password,
  };
  if (validateUser(user.name, user.email, user.password)) {
    try {
      userService.insertUserService(user);
    } catch (error) {
      newLog("Error inserting user");
    }
  }
}

export async function listAllUsers(): Promise<void> {
  try {
    const users = await userService.listAllUsers();
    const resolve = users.slice(1);
    if (resolve.length > 0) {
      console.log("Users found!");
      console.table(resolve); // Skip the first line
      newLog("All users listed successfully!");
    } else {
      console.log("No users found!");
      console.log(resolve);
    }
  } catch (error) {
    console.log("Error listing users", error);
    newLog("Error on listing all users!");
  }
}

export async function listUserByID(id: string): Promise<void> {
  try {
    const user = await userService.ListUserByID(id);
    if (user) {
      console.log("User found!");
      console.table(user);
      newLog(`User ${user.name} listed successfully!`);
    } else {
      console.log("No user found with this id!");
    }
  } catch (error) {
    console.log("Error listing user", error);
    newLog(`Error listing user by id:${id}!`);
  }
}

export async function deleteUser(id: string): Promise<void> {
  try {
    const user = await userService.ListUserByID(id);
    if (!user) {
      console.log("No user found with this id!");
      return;
    }

    try {
      await userService.deleteUser(id);
      console.log("User deleted successfully!");
      newLog(`User ${user.name} deleted successfully!`);
    } catch (error) {
      console.log("Error deleting user", error);
      newLog(`Error deleting ${user.name} from the user table!`);
    }
  } catch (error) {
    console.log("Error verifying user", error);
  }
}

export async function updateUser(id: string, name: string, email: string, password: string): Promise<void> {
  try {
    const user = await userService.ListUserByID(id);
    if (!user) {
      console.log("No user found with this id!");
      return;
    }

    if (validateUser(name, email, password)) {
      try {
        await userService.updateUser(id, name, email, password);
        console.log("User updated successfully!");
        newLog(`User ${user.name} updated successfully!`);
      } catch (error) {
        console.log("Error updating user", error);
        newLog(`Error updating ${user.name} from the user table!`);
      }
    }
  } catch (error) {
    console.log("Error verifying user", error);
  }
}

//createUserTable();
//insertIntoUser("eduardo","emailerrado@gmail.com","Maximino7@#255608!");
//listAllUsers();
//listUserByID(1);
//deleteUser(0);
//updateUser(1,"eduardo", "dudutarads@hotlang.com", "Maximino7@#255608!");
