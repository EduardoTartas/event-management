import * as userService from '../services/userService';
import { validateUser } from '../utils/validations';

export function createUserTable(): void {
    userService.createUserTable()
        .then((resolve) => console.log("User table created successfully!", resolve))
        .catch((reject) => console.log("Error creating user table", reject));
}

export function insertIntoUser(name: string, email: string, password: string): void {
    if(validateUser(name, email, password)){
        userService.insertIntoUser(name, email, password)
        .then((resolve) => console.log("User inserted successfully!", resolve))
        .catch((reject) => console.log("Error inserting user", reject)); 
    }
}

export function listAllUsers(): void {
    userService.listAllUsers()
        .then((resolve) => {
            if (resolve.length > 0) {
                console.log("Users found!");
                console.table(resolve);
            }
            else {
                console.log("No users found!");
                console.log(resolve);
            }
        })
        .catch((reject) => { console.log("Error listing users", reject) });
}

export function listUserByID(id: number): void {
    userService.ListUserByID(id)
    .then((resolve) => {
        if(resolve){
            console.log("User found!");
            console.table(resolve);
        }
        else{
            console.log("No user found with this id!");
        }
    })
    .catch((reject) => {console.log("Error listing user", reject)});
}

export function deleteUser(id: number): void {
    userService.verifyUser(id)
    .then((resolve) => {
        if(!resolve){
            console.log("No user found with this id!");
            return;
        }

        userService.deleteUser(id)
        .then(() => {console.log("User deleted successfully!")})
        .catch((reject) => {console.log("Erro deleting user", reject)});
    })
    .catch((reject) =>{console.log("Error verifying user", reject)});
}

export function updateUser(id: number, name: string, email: string, password: string): void {
    userService.verifyUser(id)
    .then((resolve) => {
        if(!resolve){
            console.log("No user found with this id!");
            return;
        }

        if(validateUser(name, email, password)){
            userService.updateUser(id, name, email, password)
            .then((resolve) => {console.log("User updated successfully!")})
            .catch((reject) =>{console.log("Error updating user")});
        }
    })
    .catch((reject) =>{console.log("Error verifying user", reject);});
}

//createUserTable();
//insertIntoUser("eduardo","emailerrado@gmail.com","Maximino7@#255608!");
//listAllUsers();
//listUserByID(1);
//deleteUser(0);
//updateUser(1,"eduardo", "dudutarads@hotlang.com", "Maximino7@#255608!");