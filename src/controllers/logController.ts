import { logModel } from "../model/logModel";
import * as logService from "../services/logService";
import { currentUser } from "./loginController";

export function createLogTable(): void {
  logService
    .createLogTable()
    .then((resolve) => {
      //console.log("Log table created successfully!", resolve)
    })
    .catch((reject) => console.log("Error creating log table", reject));
}


export function newLog(info: string): void {
  const date = new Date().toLocaleDateString("pt-BR").split("/").join("-");
  const log: logModel = {
    info: `User: ${currentUser.name} (ID: ${currentUser.id}) - ${info}`,
    date: date,
  };
  logService.insertIntoLog(log)
  .then()
  .catch((reject) => console.log("Error inserting log", reject));
}
