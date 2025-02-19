import { eventModel } from "../model/eventModel";
import { db } from "../configs/sqlClient";

export async function createEventTable(): Promise<any> {
  const query = `CREATE TABLE IF NOT EXISTS events (id TEXT PRIMARY KEY, name TEXT, date TEXT, user_id INTEGER, FOREIGN KEY (user_id) REFERENCES users(id))`;
  return new Promise((resolve, reject) => {
    db.run(query, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve(true);
    });
  });
}

export async function insertIntoEvent(event: eventModel): Promise<any> {
  const query = `INSERT INTO events (id, name, date, user_id) VALUES (?, ?, ?, ?)`;
  const values = [event.id, event.name, event.date, event.user_id];
  return new Promise((resolve, reject) => {
    db.run(query, values, (error) => {
      if (error) {
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

export async function ListEventByID(id: string): Promise<any> {
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

export async function deleteEvent(id: string): Promise<any> {
  const query = `DELETE FROM events WHERE id >= ?`;
  return new Promise((resolve, reject) => {
    db.run(query, id, function (error) {
      if (error) {
        return reject(error);
      }
    });
    return resolve(true);
  });
}

export async function updateEvent(
  id: string,
  name: string,
  date: string,
  user_id: string
): Promise<any> {
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
