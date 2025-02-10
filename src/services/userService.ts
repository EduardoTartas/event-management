import sqlite3 from "sqlite3";
import { promise } from "zod";

const db = new sqlite3.Database("src/data/eventDB.db");

export async function verifyUser(id:number): Promise<any>{
  const query = `SELECT id FROM users WHERE id = ?`;
  return new Promise((resolve, reject) => {
      db.get(query, id, (error, row) => {
          if (error) {
              return reject(error);
          }
          return resolve(row);
      });
  });
}

export async function createUserTable(): Promise<any> {
  const query = `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT)`;
  return new Promise((resolve, reject) => {
    db.run(query, (error) => {
      if (error) {
        return reject(error);
      }
    });
    return resolve(true);
  });
}

export async function insertIntoUser(name:string, email:string, password:string): Promise<any> {
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  const values = [name, email, password];
  return new Promise((resolve, reject) => {
    db.run(query, values, (error) => {
      if (error) {
        return reject(error);
      }
    });
    return resolve(true);
  });
}

export async function listAllUsers(): Promise<any> {
  const query = `SELECT * FROM users`;
  return new Promise((resolve, reject) => {
    db.all(query, (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
}

export async function ListUserByID(id: number): Promise<any> {
  const query = `SELECT * FROM users WHERE id = ?`;
  return new Promise((resolve, reject) => {
    db.get(query, id, (error, row) => {
      if (error) {
        return reject(error);
      }
      return resolve(row);
    });
  });
}

export async function deleteUser(id: number): Promise<any>{
  const query = `DELETE FROM users WHERE id = ?`;
  return new Promise((resolve, reject) =>{
    db.run(query, id, function (error) {
      if (error) {
        return reject(error);
      }
    });
    return resolve(true);
  });
}

export async function updateUser( id: number, name: string, email: string, password: string): Promise<any> {
  const query = `UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`;
  const values = [name, email, password, id];
  return new Promise((resolve, reject) =>{
    db.run(query, values, (error) => {
      if (error) {
        return reject(error);
      }
    });
    return resolve(true);
  });

}

//createUserTable();
//insertIntoUser("teste", "qwe", "123456")
//listAllUsers();
//ListUserByID(3);
//deleteUser(3);
//atualizarUsuario(1,"eduardo", "teste", "12314243");
