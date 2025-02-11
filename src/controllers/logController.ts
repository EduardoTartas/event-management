import { logModel } from '../model/logModel';
import * as logService from '../services/logService';

export function createLogTable(): void {
    logService.createLogTable()
        .then((resolve) => console.log("Log table created successfully!", resolve))
        .catch((reject) => console.log("Error creating log table", reject));
}

export function insertIntoLog(log:logModel): void {  
    logService.insertIntoLog(log)
        .then(() => console.log("Log inserted successfully!"))
        .catch((reject) => console.log("Error inserting log", reject));
}

export function newLog(info: string): void {
    const date = ("0" + new Date().getDay() + "-0" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear());
    const log:logModel = {
        info: info,
        date: date
    }
    insertIntoLog(log);
}