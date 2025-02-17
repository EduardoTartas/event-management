import sqlite3 from "sqlite3";
import { db } from "../configs/sqlClient";

class UserRepository {

    //No banco não rota userLogin -> ? 
    static async userList(name: string): Promise<any> {
        const query = "SELECT * FROM users WHERE name = ?";
        console.log(db.get(query, name));
        
        return db.get(query, name);
    }
}

export default UserRepository;
