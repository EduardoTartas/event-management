import { logModel } from "../model/logModel";
import * as fs from 'fs';

export async function insertIntoLog(log: logModel): Promise<any> {
  const path = "./data/logs.log";
  const row = `${log.info} - ${log.date}\n`;
  return new Promise((resolve, reject) => {
    fs.appendFile(path, row, 'utf-8', (error) => {
      if (error) {
        return reject(error);
      }
      return resolve(true);
    });
  });
}

/*
export function saveAsCsv(): void {
    const row = users.map(user => {
        return `${user.id},${user.name},${user.email},${user.password},${user.role.name},${user.registerDate.toISOString()},${user.lastEdit.toISOString()},${user.status}`;
    }).join('\n');

    fs.writeFile(usersFilePath, row, 'utf-8', (error) => {
        if (error) {
            clear();
            console.log(`${chalk.bold("ERROR!009: ")}Erro ao salvar usuários.`);
        }
    });
}

*/