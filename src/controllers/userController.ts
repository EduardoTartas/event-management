import * as userService from '../services/userService';
import { validateUser} from '../utils/validations';

export function createUserTable(): void {
    try{
        userService.createUserTable();
        console.log("User table created successfully!");
    }
    catch(err){
        console.log("Error creating user table", err);
    }
}

export function insertIntoUser(name: string, email: string, password: string): void {
    if(validateUser(name, email, password)){
        try{
            userService.insertIntoUser(name, email, password);
            console.log("User inserted successfully!");
        }
        catch(err){
            console.log("Error inserting user", err);
        }
    }
    else{
        console.log("Invalid user");
    }
}


export function listAllUsers(): void {
    try{
        userService.listAllUsers();
    }
    catch(err){
        console.log("Error listing users", err);
    }
}

export function listUserByID(id: number): void {
    try{
        userService.ListUserByID(id);
    }
    catch(err){
        console.log("Error listing user", err);
    }
}

export function deleteUser(id: number): void {
    try{
        userService.deleteUser(id);
        console.log("User deleted successfully!");
    }
    catch(err){
        console.log("Error deleting user", err);
    }
    
}

export function updateUser(id: number, name: string, email: string, password: string): void {
    if(validateUser(name, email, password)){
        try{
            userService.updateUser(id, name, email, password);
            console.log("User updated successfully!");
        }
        catch(err){
            console.log("Error updating user", err);
        }
    }
    else{
        console.log("Invalid user");
    }
}

//createUserTable();
//insertIntoUser("eduardo","emailerrado@gmail.com","Maximino7@#255608!");
//listAllUsers();
//listUserByID(1);
//deleteUser(0);
//updateUser(1,"eduardo", "dudutarads@hotlang.com", "Maximino7@#255608!");