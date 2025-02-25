import { mainMenu } from "./cli/mainMenu";

async function run() {
  while (true) {
    console.log("\x1Bc");
    await mainMenu();
  }
}

run();


