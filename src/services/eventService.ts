import sqlite3 from "sqlite3";

const db = new sqlite3.Database("src/data/eventDB.db");

export function createEventTable(): void {
    const query = `CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, date TEXT, user_id INTEGER, FOREIGN KEY (user_id) REFERENCES users(id))`; 
    db.run(query);
}

export async function insertIntoEvent(name: string, date: string, user_id: number): Promise<any> {
    const query = `INSERT INTO events (name, date, user_id) VALUES (?, ?, ?)`;
    const values = [name, date, user_id];
    return new Promise((resolve, reject) => {    
       const teste =  db.run(query, values, (err) => {
            if (err) {
                return reject(err);
            } 
        });
        return resolve(teste);
    });
}

export function listAllEvents(): Promise<any> {
     return new Promise((resolve, reject) => {
        const query = `SELECT * FROM events`;
        db.all(query, (error, rows) => {
            if (error) {
                return reject(error);
            } else {
                 return resolve(rows);
            }
        });
    });
}

export function ListEventByID(id: number): void {
    const query = `SELECT * FROM events WHERE id = ?`;
    db.get(query, id, (error, row) => {
        if (error) {
            console.error("Error!", error.message);
        }
        else if (!row) {
            console.error("No event found!");
        }
        else {
            console.log("Event found!");
            console.table(row);
        }
    });
}

export function deleteEvent(id: number): void {
    const query = `DELETE FROM events WHERE id = ?`;
    const values = id;
    db.run(query, values, function () {
        if (this.changes === 0) {
            console.log("No event found with this id!");
        }
    });
}

export function updateEvent(id: number, name: string, date: string, user_id: number) {
    const query = `UPDATE events SET name = ?, date = ?, user_id = ? WHERE id = ?`;
    const values = [name, date, user_id, id];
    db.run(query, values, function () {
        if (this.changes === 0) {
            console.log("No event found!");
        }
    });
}

//createEventTable();
//insertIntoEvent("Evento 3", "10-01-2025", 10);
//listAllEvents();
//ListEventByID(1);
//deleteEvent(19);
//updateEvent(2, "fsdfsdfsd", "10-01-2025", 18);