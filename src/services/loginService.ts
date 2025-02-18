import { db } from "../configs/sqlClient";

export async function userLogin(name: string, password: string): Promise<any> {
  const query = "SELECT * FROM users WHERE name = ? AND password = ?";
  const values = [name, password];
  return new Promise((resolve, reject) => {
    db.get(query, values, (error, row) => {
      if (error) {
        return reject(error);
      }
      return resolve(row);
    });
  });
}
