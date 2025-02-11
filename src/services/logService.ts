import sqlite3 from "sqlite3";
import { logModel } from "../model/logModel";

const db = new sqlite3.Database("src/data/eventDB.db");

export async function createLogTable(): Promise<any> {
    const query = `CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT, info TEXT, date TEXT)`; 
    return new Promise((resolve, reject) => {
        db.run(query, (error) => {
            if (error) {
                return reject(error);
            }
            return resolve(true);
        });
    });
}

export async function insertIntoLog(log:logModel): Promise<any> {
  const query = `INSERT INTO logs (info, date) VALUES (?, ?)`;
  const values = [log.info, log.date];
  return new Promise((resolve, reject) => {
    db.run(query, values, (error) => {
      if (error) {
        return reject(error);
      }
    });
    return resolve(true);
  });
}