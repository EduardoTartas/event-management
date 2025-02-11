import sqlite3 from "sqlite3";
import { eventModel } from "../model/eventModel";

const db = new sqlite3.Database("src/data/eventDB.db");

export async function verifyEvent(id:number):Promise<any>{
    const query = `SELECT id FROM events WHERE id = ?`;
    return new Promise((resolve, reject) => {
        db.get(query, id, (error, row) => {
            if (error) {
                return reject(error);
            }
            return resolve(row);
        });
    });
}

export async function createEventTable(): Promise<any> {
    const query = `CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, date TEXT, user_id INTEGER, FOREIGN KEY (user_id) REFERENCES users(id))`; 
    return new Promise((resolve, reject) => {
        db.run(query, (error) => {
            if (error) {
                return reject(error);
            }
            return resolve(true);
        });
    });
}

export async function insertIntoEvent(event:eventModel): Promise<any> {
    const query = `INSERT INTO events (name, date, user_id) VALUES (?, ?, ?)`;
    const values = [event.name, event.date, event.user_id];
     return new Promise((resolve, reject) => {    
       db.run(query, values, (error) => {
            if (error){
                return reject(error);
            } 
        });
            return resolve(true);
    });
}

export async function listAllEvents(): Promise<any> {
    const query = `SELECT * FROM events`;
     return new Promise((resolve, reject) => {
        db.all(query, (error, rows) => {
            if (error) {
                return reject(error);
            }
            return resolve(rows);
        });
    });
}

export async function ListEventByID(id: number): Promise<any> {
    const query = `SELECT * FROM events WHERE id = ?`;
    return new Promise((resolve, reject) => {
        db.get(query, id, (error, row) => {
            if (error) {
                return reject(error);
            }
            return resolve(row);
        });
    });
}

export async function deleteEvent(id: number): Promise<any> {
    const query = `DELETE FROM events WHERE id >= ?`;
    return new Promise((resolve, reject) =>{
        db.run(query, id, function (error) {
            if(error){
                return reject(error);
            }  
    });
        return resolve(true);
    });
}

export async function updateEvent(id: number, name: string, date: string, user_id: number): Promise<any> {
    const query = `UPDATE events SET name = ?, date = ?, user_id = ? WHERE id = ?`;
    const values = [name, date, user_id, id];
    return new Promise((resolve, reject) => {
        db.run(query, values, (error) => {
            if (error) {
                return reject(error);
            }
        });
        return resolve(true);
    });
}

//createEventTable();
//insertIntoEvent("Evento 3", "10-01-2025", 10);
//listAllEvents();
//ListEventByID(1);
//deleteEvent(19);
//updateEvent(2, "fsdfsdfsd", "10-01-2025", 18);