import { userModel } from '../model/userModel';
import {validateUser} from '../utils/validations'
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database("src/data/eventDB.db");


function createUserTable(): void {
    const query = `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT)`;
    db.run(query); 

        /*(error) => {
      if (error) {
        console.error("Erro ao criar a tabela de usuários", error.message);
      } else {
        console.log("Tabela de usuários criada com sucesso!");
      }
    });*/
  }

  function insertIntoUser(name: string, email: string, password: string): void {
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    const values = [name, email, password];
    const user = db.run(query, values);
        
        /*, function (error) {
        if (error) {
          console.error("Erro ao inserir usuário", error.message);
        } else {
          console.log(`Usuário ${this.lastID} inserido com sucesso!`);
        }
      });*/
    }

    export function listAllUsers():void {
      const query = `SELECT * FROM users`;
      db.all(query, (error, rows) => {
        if (error) {
          console.error("error, no users found!", error.message);
        } else {
          console.log("Users found!");
          console.table(rows);
        }
      });
    }

    function ListUserByID(id: number): void {
      const query = `SELECT * FROM users WHERE id = ?`;
      db.get(query, id, (error, row) => {
        if (error) {
          console.error("Error, no user found!", error.message);
        }
        else if (!row) {
          console.error("User not found!");
        }
        else {
          console.log("User found!");
          console.table(row);
        }
      });
    }

    function deleteUser(id: number): void {
      const query = `DELETE FROM users WHERE id = ?`;
      const values = id;
    
      db.run(query, values, function (error) {
        if (error) {
          console.error("error on delete ", error.message);
        } 
        else if (this.changes === 0) {
          console.log("Nenhuma usuário encontrado com este ID");
        }
        else {
          console.log(`Usuário deletado com sucesso!`);
        }
      });
    }



    createUserTable();
    //insertIntoUser("Lucas", "qwe", "123")
    //listAllUsers();
    //ListUserByID(1);


