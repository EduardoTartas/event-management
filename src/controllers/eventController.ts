import * as eventService from '../services/eventService';
import { validateEvent} from '../utils/validations';


export function createEventTable(): void {
    try{
        eventService.createEventTable();
        console.log("Event table created successfully!");
    }
    catch(err){
        console.log("Error creating event table", err);
    }
}

export function insertIntoEvent(name: string, date: string, user_id: number): void {
    if(validateEvent(name, date)){
        try{
            eventService.insertIntoEvent(name, date, user_id);
            console.log("Event inserted successfully!");
        }
        catch(err){
            console.log("Error inserting event", err);
        }
    }
    else{
        console.log("Invalid event");
    }
}

export function listAllEvents(): void {
    try{
        eventService.listAllEvents();
    }
    catch(err){
        console.log("Error listing events", err);
    }
}

export function listEventByID(id: number): void {
    try{
        eventService.ListEventByID(id);
    }
    catch(err){
        console.log("Error listing event", err);
    }
}

export function deleteEvent(id: number): void {
    try{
        eventService.deleteEvent(id);
        console.log("Event deleted successfully!");
    }
    catch(err){
        console.log("Error deleting event", err);
    }
    
}

export function updateEvent(id: number, name: string, data: string, user_id:number): void {
    if((validateEvent.name, data)){
        try{
            eventService.updateEvent(id, name, data, user_id);
            console.log("Event updated successfully!");
        }
        catch(err){
            console.log("Error updating event", err);
        }
    }
    else{
        console.log("Invalid event");
    }
}

//createEventTable();
//insertIntoEvent("Casamento", "10-01-2025", 10);
//listAllEvents();
//listEventByID(6);
//deleteEvent(2);
//updateEvent(1, "Aniversário", "10-01-2025", 10);