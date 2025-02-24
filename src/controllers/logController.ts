import { logModel } from "../model/logModel";
import { insertIntoLog } from "../services/logService";
import { currentUser } from "./loginController";

export async function newLog(info: string): Promise<void> {
  if (!currentUser) {
    console.log("No current user set. Cannot log information.");
    return;
  }

  const log: logModel = {
    info: `User: ${currentUser.name} (ID: ${currentUser.id}) - ${info}`,
    date: new Date().toISOString(),
  };

  try {
    await insertIntoLog(log);
    console.log("Log entry created successfully!");
  } catch (error) {
    console.log("Error creating log entry", error);
  }
}
