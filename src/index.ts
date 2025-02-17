import * as userControllers from "../src/controllers/userController";
import * as eventControllers from "../src/controllers/eventController";
import * as logControllers from "../src/controllers/logController";

//descomentar a linha que deseja testar

logControllers.createLogTable();
userControllers.createUserTable();
eventControllers.createEventTable();

//userControllers.insertIntoUser();     //passar name, email, password
//userControllers.deleteUser();         //passar id do usuario
//userControllers.listUserByID();       //passar id do usuario
//userControllers.listAllUsers();       
//userControllers.updateUser();         //passar id, name, email, password

//eventControllers.insertIntoEvent();   //passar nome, data e id do usuario
//eventControllers.deleteEvent();       //passar id do evento
//eventControllers.listEventByID();     //passar id do evento
//eventControllers.listAllEvents();     
//eventControllers.updateEvent()        //passar id, nome, data e id do usuario
//teste