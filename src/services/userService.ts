import sqlite3 from "sqlite3";

const db = new sqlite3.Database("src/data/eventDB.db");

export function createUserTable(): void {
  const query = `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT)`;
  db.run(query);
}

export function insertIntoUser(
  name: string,
  email: string,
  password: string
): void {
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  const values = [name, email, password];
  db.run(query, values, function (error) {
    /*, function (error) {
        if (error) {
          console.error("Erro ao inserir usuário", error.message);
        } else {
          console.log(`Usuário ${this.lastID} inserido com sucesso!`);
        }
      });*/
  });
}

export function listAllUsers(): void {
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

export function ListUserByID(id: number): void {
  const query = `SELECT * FROM users WHERE id = ?`;
  db.get(query, id, (error, row) => {
    if (error) {
      console.error("Error, no user found!", error.message);
    } else if (!row) {
      console.error("No user found!");
    } else {
      console.log("User found!");
      console.table(row);
    }
  });
}

export function deleteUser(id: number): void {
  const query = `DELETE FROM users WHERE id = ?`;
  const values = id;
  db.run(query, values, function () {
    if (this.changes === 0) {
      console.log("No user found with this id!");
    }
  });
}

export function updateUser( id: number, nome: string, email: string, senha: string): void {
  const query = `UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`;
  const values = [nome, email, senha, id];

  db.run(query, values, function () {
    if (this.changes === 0) {
      console.log("No user found!");
    }
  });
}

//createUserTable();
//insertIntoUser("teste", "qwe", "123456")
//listAllUsers();
//ListUserByID(3);
//deleteUser(3);
//atualizarUsuario(1,"eduardo", "teste", "12314243");
