import inquirer from "inquirer";
import * as userControllers from "../controllers/userController";
import { generateUser } from "../seeds/userSeeds";

export async function manageUsersMenu() {
  const { manageUsersMenuOption } = await inquirer.prompt([
    {
      message: "Select an option",
      type: "list",
      choices: ["List all users", "List a user by ID", "Insert a new user", "Update a user", "Delete a user", "Load users from seeds"],
      name: "manageUsersMenuOption",
    },
  ]);

  switch (manageUsersMenuOption) {
    case "List all users":
       await userControllers.listAllUsers();
      break;

    case "List a user by ID":
      await manageUsersListByID();
      break;

    case "Insert a new user":
      await manageUsersInsert();
      break;

    case "Update a user":
      await manageUsersUpdate();
      break;

    case "Delete a user":
      await manageUsersDelete();
      break;

    case "Load users from seeds":
      await generateUser();
      break;
    }

}

async function manageUsersListByID() {
  const { userID } = await inquirer.prompt([
    {
      message: "Please write the user ID: ",
      type: "input",
      name: "userID",
    },
  ]);

  userControllers.listUserByID(userID);
}

async function manageUsersInsert() {
  const { registerName, registerEmail, registerPassword } = await inquirer.prompt([
    {
      message: "Please write a name",
      type: "input",
      name: "registerName",
    },
    {
      message: "Please write a email",
      type: "input",
      name: "registerEmail",
    },
    {
      message: "Please write a password",
      type: "input",
      name: "registerPassword",
    },
  ]);

  userControllers.insertIntoUser(registerName, registerEmail, registerPassword);
}

async function manageUsersUpdate() {
  const { userID, updateName, updateEmail, updatePassword } = await inquirer.prompt([
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
      type: "input",
      name: "updatePassword",
    },
  ]);

  userControllers.updateUser(userID, updateName, updateEmail, updatePassword);
}

async function manageUsersDelete() {
  const { userID } = await inquirer.prompt([
    {
      message: "Please write the user ID",
      type: "input",
      name: "userID",
    },
  ]);

  userControllers.deleteUser(userID);
}
