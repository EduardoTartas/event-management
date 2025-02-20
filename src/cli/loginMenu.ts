import inquirer from "inquirer";
import * as loginControllers from '../controllers/loginController';

export async function loginMenu() {
  const { loginEmail, loginPassword } = await inquirer.prompt([
    {
      message: "Please write your email",
      type: "input",
      default: "admin",
      name: "loginEmail"
    },
    {
      message: "Please write your password",
      type: "input",
      default: "admin",
      name: "loginPassword"
    }
  ]);

  loginControllers.userLogin(loginEmail, loginPassword);
}