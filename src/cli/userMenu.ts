import { Answers } from "./../../node_modules/inquirer/dist/commonjs/types.d";
import inquirer from "inquirer";
import * as userControllers from "../controllers/userController";

async function manageUsersMenu() {
  const {manageUsersMenuOption} = await inquirer.prompt([
    {
      message: "Select an option",
      type: "list",
      choices: [
        "List all users",
        "List a user by ID",
        "Insert a new user",
        "Update a user",
        "Delete a user",
      ],
      name: "manageUsersMenuOption",
    },
  ]);

  switch (manageUsersMenuOption) {
    case "List all users":
      userControllers.listAllUsers();
      break;

    case "List a user by ID":
      manageUsersListByID();
      break;

    case "Insert a new user":
      manageUsersInsert();
      break;

    case "Update a user":
      manageUsersUpdate();
      break;

    case "Delete a user":
      manageUsersDelete();
      break;
  }
}

async function manageUsersListByID() {
    const { userID } = await inquirer.prompt([
        {
            message: "Please write the user ID",
            type: "input",
            name: "userID",
        },
    ]);

    userControllers.listUserByID(userID.userID);
}

async function manageUsersInsert() {
    const {registerName, registerEmail, registerPassword} = await inquirer.prompt([
        {
            message: "Please write your name",
            type: "input",
            name: "registerName",
        },
        {
            message: "Please write your email",
            type: "input",
            name: "registerEmail",
        },
        {
            message: "Please write your password",
            type: "password",
            name: "registerPassword",
        },
    ]);

    userControllers.insertIntoUser(
        registerName,
        registerEmail,
        registerPassword
    );
}

async function manageUsersUpdate() {
    const {userID, updateName, updateEmail, updatePassword} = await inquirer.prompt([
        {
            message: "Please write the user ID",
            type: "input",
            name: "userID",
        },
        {
            message: "Please write the new name",
            type: "input",
            name: "updateName",
        },
        {
            message: "Please write the new email",
            type: "input",
            name: "updateEmail",
        },
        {
            message: "Please write the new password",
            type: "password",
            name: "updatePassword",
        },
    ]);

    userControllers.updateUser(userID, updateName, updateEmail,updatePassword);
}

async function manageUsersDelete() {
    const {userID} = await inquirer.prompt([
        {
            message: "Please write the user ID",
            type: "input",
            name: "userID",
        },
    ]);

    userControllers.deleteUser(userID);
}
