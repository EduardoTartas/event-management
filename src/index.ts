import { mainMenu } from "./cli/mainMenu";

import * as userControllers from "./controllers/userController";
import * as eventControllers from "./controllers/eventController";

userControllers.createUserTable();
eventControllers.createEventTable();

async function run() {
  while (true) {
    console.log("\x1Bc");
    await mainMenu();
  }
}

run();


