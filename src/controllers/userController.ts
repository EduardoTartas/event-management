import { userModel } from "../model/userModel";
import * as userService from "../services/userService";
import { validateUser } from "../utils/validations";
import { newLog } from "./logController";
import {generateUser} from "../seeds/userSeeds";
import { v4 as uuid } from 'uuid';

export function createUserTable(): void {
  userService
    .createUserTable()
    .then((resolve) => {
      console.log("User table created successfully!", resolve);
      //generateUser();
      //newLog("User table created successfully!");
    })
    .catch((reject) => console.log("Error creating user table", reject));
}

export function insertIntoUser(name: string, email: string, password: string): void {
  const user: userModel = {
    id: uuid(),
    name: name,
    email: email,
    password: password,
  };
  if (validateUser(user.name, user.email, user.password)) {
    userService
      .insertIntoUser(user)
      .then((resolve) => {
        console.log("User inserted successfully!", resolve);
        newLog(`User ${user.name} inserted successfully!`);
      })
      .catch((reject) => {
        console.log("Error inserting user", reject);
        newLog(`Error inserting ${user.name} into the user table!`);
      });
  }
}

export function listAllUsers(): void {
  userService
    .listAllUsers()
    .then((resolve) => {
      if (resolve.length > 0) {
        console.log("Users found!");
        console.table(resolve);
        newLog("All users listed successfully!");
      } else {
        console.log("No users found!");
        console.log(resolve);
      }
    })
    .catch((reject) => {
      console.log("Error listing users", reject);
      newLog("Error on listing all users!");
    });
}

export function listUserByID(id: string): void {
  userService
    .ListUserByID(id)
    .then((resolve) => {
      if (resolve) {
        console.log("User found!");
        console.table(resolve);
        newLog(`User ${resolve.name} listed successfully!`);
      } else {
        console.log("No user found with this id!");
      }
    })
    .catch((reject) => {
      console.log("Error listing user", reject);
      newLog(`Error listing user by id:${id}!`);
    });
}

export function deleteUser(id: string): void {
  userService
    .ListUserByID(id)
    .then((resolve) => {
      if (!resolve) {
        console.log("No user found with this id!");
        return;
      }

      userService
        .deleteUser(id)
        .then(() => {
          console.log("User deleted successfully!");
          newLog(`User ${resolve.name} deleted successfully!`);
        })
        .catch((reject) => {
          console.log("Error deleting user", reject);
          newLog(`Error deleting ${resolve.name} from the user table!`);
        });
    })
    .catch((reject) => {
      console.log("Error verifying user", reject);
    });
}

export function updateUser(id: string, name: string, email: string, password: string): void {
    userService
    .ListUserByID(id)
    .then((resolve) => {
      if (!resolve) {
        console.log("No user found with this id!");
        return;
      }

      if (validateUser(name, email, password)) {
        userService
          .updateUser(id, name, email, password)
          .then((resolve) => {
            console.log("User updated successfully!");
            newLog(`User ${resolve.name} updated successfully!`);
          })
          .catch((reject) => {
            console.log("Error updating user", reject);
            newLog(`Error updating ${resolve.name} from the user table!`);
          });
      }
    })
    .catch((reject) => {
      console.log("Error verifying user", reject);
    });
}

//createUserTable();
//insertIntoUser("eduardo","emailerrado@gmail.com","Maximino7@#255608!");
//listAllUsers();
//listUserByID(1);
//deleteUser(0);
//updateUser(1,"eduardo", "dudutarads@hotlang.com", "Maximino7@#255608!");
