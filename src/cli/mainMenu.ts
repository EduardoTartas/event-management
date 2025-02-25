import inquirer from "inquirer";
import { manageUsersMenu } from './userMenu';
import { manageEventsMenu } from './eventMenu';
import { loginMenu } from './loginMenu';
import { currentUser } from '../controllers/loginController';

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
        message: "\nPress enter to continue...\n",
        type: "input",
        name: "continue"
      }
    ]);
  }