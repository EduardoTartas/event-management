import * as eventService from "../services/eventService";
import * as userService from "../services/userService";
import { newLog } from "./logController";
import { validateEvent } from "../utils/validations";
import { eventModel } from "../model/eventModel";
import { v4 as uuid } from 'uuid';

export async function insertIntoEvent(name: string, date: string, user_id: string): Promise<void> {
  const event: eventModel = {
    id: uuid(),
    name: name,
    date: date,
    user_id: user_id,
  };

  try {
    const user = await userService.verifyUser(event.user_id);
    if (!user) {
      console.log("No user found with this id!");
      return;
    }

    if (validateEvent(event.name, event.date)) {
      try {
        await eventService.insertIntoEvent(event);
        console.log("Event inserted successfully!");
        newLog(`Event ${event.name} inserted successfully!`);
      } catch (error) {
        console.log("Error inserting event", error);
        newLog(`Error inserting ${event.name} into the event table!`);
      }
    }
  } catch (error) {
    console.log("Error verifying user", error);
  }
}

export async function listAllEvents(): Promise<void> {
  try {
    const events = await eventService.listAllEvents();
    if (events.length > 0) {
      console.log("Events found!");
      console.table(events);
      newLog("All events listed successfully!");
    } else {
      console.log("No events found!");
      console.log(events);
    }
  } catch (error) {
    console.log("Error listing events", error);
    newLog("Error on listing all events!");
  }
}

export async function listEventByID(id: string): Promise<void> {
  try {
    const event = await eventService.ListEventByID(id);
    if (event) {
      console.log("Event found!");
      console.table(event);
      newLog(`Event ${event.name} listed successfully!`);
    } else {
      console.log("No event found with this id!");
    }
  } catch (error) {
    console.log("Error listing event", error);
    newLog(`Error listing event by id:${id}!`);
  }
}

export async function deleteEvent(id: string): Promise<void> {
  try {
    const event = await eventService.ListEventByID(id);
    if (!event) {
      console.log("No event found with this id!");
      return;
    }

    try {
      await eventService.deleteEvent(id);
      console.log(`Event deleted successfully!`);
      newLog(`Event ${event.name} deleted successfully!`);
    } catch (error) {
      console.log("Error deleting event", error);
      newLog(`Error deleting ${event.name} from the event table!`);
    }
  } catch (error) {
    console.log("Error verifying event", error);
  }
}

export async function updateEvent(id: string, name: string, date: string, user_id: string): Promise<void> {
  try {
    const user = await userService.verifyUser(user_id);
    if (!user) {
      console.log("No user found with this id!");
      return;
    }

    const event = await eventService.ListEventByID(id);
    if (!event) {
      console.log("No event found with this id!");
      return;
    }

    if (validateEvent(name, date)) {
      try {
        await eventService.updateEvent(id, name, date, user_id);
        console.log("Event updated successfully!");
        newLog(`Event ${event.name} updated successfully!`);
      } catch (error) {
        console.log("Error updating event", error);
        newLog(`Error updating ${event.name} from the event table!`);
      }
    }
  } catch (error) {
    console.log("Error verifying user or event", error);
  }
}

//createEventTable();
//insertIntoEvent("FEsta3", "10-01-2025", 10);
//listAllEvents();
//listEventByID(11);
//deleteEvent(9);
//updateEvent(7, "Aniversário", "10-01-2025", 7);
