import inquirer from "inquirer";

import * as logControllers from "./controllers/logController";
import * as userControllers from "./controllers/userController";
import * as eventControllers from "./controllers/eventController";

import { manageUsersMenu } from './cli/userMenu';
import { manageEventsMenu } from './cli/eventMenu';
import { loginMenu } from './cli/loginMenu';
import { currentUser } from './controllers/loginController';

logControllers.createLogTable();
userControllers.createUserTable();
eventControllers.createEventTable();

function clear() {
  console.log("\x1Bc");
}

export async function mainMenu() {
  const { mainMenuOption } = await inquirer.prompt([
    {
      message: "Select an option",
      type: "list",
      choices: ["Login", "Manage users", "Manage events", "Exit"],
      name: "mainMenuOption"
    }
  ]);

  switch (mainMenuOption) {
    case "Login":
      await loginMenu();
      break;
    case "Manage users":
      if (!currentUser) {
        console.log("You must be logged in to access this option");
        break;
      }
      await manageUsersMenu();
      break;
    case "Manage events":
      if (!currentUser) {
        console.log("You must be logged in to access this option");
        break;
      }
      await manageEventsMenu();
      break;
    case "Exit":
      process.exit();
      break;
  }

  await inquirer.prompt([
    {
      message: "\nPress enter to continue...",
      type: "input",
      name: "continue"
    }
  ]);
}

async function run() {
  while (true) {
    clear();
    await mainMenu();
  }
}

run();


