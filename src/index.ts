import * as userControllers from "../src/controllers/userController";
import * as eventControllers from "../src/controllers/eventController";
import * as logControllers from "../src/controllers/logController";
import * as loginControllers from "../src/controllers/loginController";


//logControllers.createLogTable();
userControllers.createUserTable();
//eventControllers.createEventTable();

// Inserir usuário admin

//userControllers.insertIntoUser("Eduardo", "eduardo@gmail.com", "Max123456im!");     //passar name, email, password
//userControllers.deleteUser();         //passar id do usuario
//userControllers.listUserByID(1);       //passar id do usuario
//loginControllers.userLogin("Eduardo", "Max123456im!"); //passar name, password
//userControllers.listAllUsers();       
//userControllers.updateUser();         //passar id, name, email, password

//eventControllers.insertIntoEvent();   //passar nome, data e id do usuario
//eventControllers.deleteEvent();       //passar id do evento
//eventControllers.listEventByID();     //passar id do evento
//eventControllers.listAllEvents();     
//eventControllers.updateEvent()        //passar id, nome, data e id do usuario
