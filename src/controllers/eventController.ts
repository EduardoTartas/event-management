
import * as eventService from '../services/eventService';
import * as userService from '../services/userService';
import { newLog } from './logController';
import { validateEvent} from '../utils/validations';
import { eventModel } from '../model/eventModel';


export function createEventTable(): void { 
    eventService.createEventTable()
        .then((resolve) => {
            console.log("Event table created successfully!", resolve)
            newLog("Event table created successfully!");
        })
        .catch((reject) => console.log("Error creating event table", reject));
}

export function insertIntoEvent(name: string, date: string, user_id: number): void {
    const event: eventModel = {
        name: name,
        date: date,
        user_id: user_id
    }

    userService.verifyUser(event.user_id)
    .then((resolve) => {
        if(!resolve){
            console.log("No user found with this id!");
            return;
        }

        if(validateEvent(name, date)){
            eventService.insertIntoEvent(event)
            .then(() => {
                console.log("Event inserted successfully!")
                newLog("Event inserted successfully!");
            })
            .catch((reject) => console.log("Error inserting event", reject));
        }
    })
    .catch((reject) => console.log("Error verifying user", reject));
}

export function listAllEvents(): void {
    eventService.listAllEvents()
    .then((resolve) => {
        if(resolve.length > 0){
            console.log("Events found!");
            console.table(resolve);
            newLog("All events listed successfully!");
        }
        else{
            console.log("No events found!");
            console.log(resolve);
        }
        
    })
    .catch((reject) => {console.log("Error listing events", reject)});
}

export function listEventByID(id: number): void {
    eventService.ListEventByID(id)
    .then((resolve) => {
        if(resolve){
            console.log("Event found!");
            console.table(resolve);
            newLog("Event listed successfully!");
        }
        else{
            console.log("No event found with this id!");
        }
    })
    .catch((reject) => console.log("Error listing event", reject));
}

export function deleteEvent(id: number): void {
    eventService.verifyEvent(id)
        .then((resolve) => {
            if (!resolve) {
                console.log("No event found with this id!");
                return;
            }

            eventService.deleteEvent(id)
                .then(() => {
                    console.log("Event deleted successfully!")
                    newLog("Event deleted successfully!");
                })
                .catch((reject) => console.log("Error deleting event", reject));
        })
        .catch((reject) => console.log("Error verifying event", reject));
} 

export function updateEvent(id: number, name: string, data: string, user_id: number): void {
    userService.verifyUser(user_id)
        .then((resolve) => {
            if (!resolve) {
                console.log("No user found with this id!");
                return;
            }

            eventService.verifyEvent(id)
                .then((resolve) => {
                    if (!resolve) {
                        console.log("No event found with this id!");
                        return;
                    }

                    if (validateEvent(name, data)) {
                        eventService.updateEvent(id, name, data, user_id)
                            .then((resolve) => {
                                 console.log("Event updated successfully!"); 
                                newLog("Event updated successfully!");
                            })
                            .catch((reject) => { console.log("Error updating event", reject); });
                    }
                })
                .catch((reject) => { console.log("Error verifying event", reject); });

        })
        .catch((reject) => { console.log("Error verifying user", reject); });
}

//createEventTable();
//insertIntoEvent("FEsta3", "10-01-2025", 10);
//listAllEvents();
//listEventByID(11);
//deleteEvent(9);
//updateEvent(7, "Aniversário", "10-01-2025", 7);