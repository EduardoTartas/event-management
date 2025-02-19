import { db } from "../configs/sqlClient";

export async function userLogin(email: string, password: string): Promise<any> {
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  const values = [email, password];
  return new Promise((resolve, reject) => {
    db.get(query, values, (error, row) => {
      if (error) {
        return reject(error);
      }
      return resolve(row);
    });
  });
}
