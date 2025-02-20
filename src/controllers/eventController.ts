import * as eventService from "../services/eventService";
import * as userService from "../services/userService";
import { newLog } from "./logController";
import { validateEvent } from "../utils/validations";
import { eventModel } from "../model/eventModel";
import { generateEvent } from "../seeds/eventSeeds";
import { v4 as uuid } from 'uuid';

export function createEventTable(): void {
  eventService
    .createEventTable()
    .then((resolve) => {
      //newLog("Event table created successfully!");
    })
    .catch((reject) => {
      console.log("Error creating event table", reject);
      //newLog("Error creating event table!");
    });
}

export function insertIntoEvent(name: string, date: string, user_id: string): void {
  const event: eventModel = {
    id: uuid(),
    name: name,
    date: date,
    user_id: user_id,
  };

  userService
    .verifyUser(event.user_id)
    .then((resolve) => {
      if (!resolve) {
        console.log("No user found with this id!");
        return;
      }

      if (validateEvent(event.name, event.date)) {
        eventService
          .insertIntoEvent(event)
          .then(() => {
            console.log("Event inserted successfully!");
            newLog(`Event ${event.name} inserted successfully!`);
          })
          .catch((reject) => {
            console.log("Error inserting event", reject);
            newLog(`Error inserting ${event.name} into the event table!`);
          });
      }
    })
    .catch((reject) => console.log("Error verifying user", reject));
}

export function listAllEvents(): void {
  eventService
    .listAllEvents()
    .then((resolve) => {
      if (resolve.length > 0) {
        console.log("Events found!");
        console.table(resolve);
        newLog("All events listed successfully!");
      } else {
        console.log("No events found!");
        console.log(resolve);
      }
    })
    .catch((reject) => {
      console.log("Error listing events", reject);
      newLog("Error on listing all events!");
    });
}

export function listEventByID(id: string): void {
  eventService
    .ListEventByID(id)
    .then((resolve) => {
      if (resolve) {
        console.log("Event found!");
        console.table(resolve);
        newLog(`Event ${resolve.name} listed successfully!`);
      } else {
        console.log("No event found with this id!");
      }
    })
    .catch((reject) => {
      console.log("Error listing event", reject);
      newLog(`Error listing event by id:${id}!`);
    });
}

export function deleteEvent(id: string): void {
  eventService
    .ListEventByID(id)
    .then((resolve) => {
      if (!resolve) {
        console.log("No event found with this id!");
        return;
      }

      eventService
        .deleteEvent(id)
        .then(() => {
          console.log(`Event deleted successfully!`);
          newLog(`Event ${resolve.name} deleted successfully!`);
        })
        .catch((reject) => {
          console.log("Error deleting event", reject);
          newLog(`Error deleting ${resolve.name} from the event table!`);
        });
    })
    .catch((reject) => console.log("Error verifying event", reject));
}

export function updateEvent(
  id: string,
  name: string,
  data: string,
  user_id: string
): void {
  userService
    .verifyUser(user_id)
    .then((resolve) => {
      if (!resolve) {
        console.log("No user found with this id!");
        return;
      }

      eventService
        .ListEventByID(id)
        .then((resolve) => {
          if (!resolve) {
            console.log("No event found with this id!");
            return;
          }

          if (validateEvent(name, data)) {
            eventService
              .updateEvent(id, name, data, user_id)
              .then((resolve) => {
                console.log("Event updated successfully!");
                newLog(`Event ${resolve.name} updated successfully!`);
              })
              .catch((reject) => {
                console.log("Error updating event", reject);
                newLog(`Error updating ${resolve.name} from the event table!`);
              });
          }
        })
        .catch((reject) => console.log("Error verifying event", reject));
    })
    .catch((reject) => {
      console.log("Error verifying user", reject);
    });
}

//createEventTable();
//insertIntoEvent("FEsta3", "10-01-2025", 10);
//listAllEvents();
//listEventByID(11);
//deleteEvent(9);
//updateEvent(7, "Aniversário", "10-01-2025", 7);
