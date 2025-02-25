import inquirer from "inquirer";
import * as eventControllers from "../controllers/eventController";
import { generateEvent } from "../seeds/eventSeeds";

export async function manageEventsMenu(): Promise<void> {
  const { manageEventsMenuOption } = await inquirer.prompt([
    {
      message: "Select an option",
      type: "list",
      choices: ["List all events", "List an event by ID", "Insert a new event", "Update an event", "Delete an event","Load events from seeds"],
      name: "manageEventsMenuOption",
    },
  ]);

  switch (manageEventsMenuOption) {
    case "List all events":
      await eventControllers.listAllEvents();
      break;

    case "List an event by ID":
      await manageEventsListByID();
      break;

    case "Insert a new event":
      await manageEventsInsert();
      break;

    case "Update an event":
      await manageEventsUpdate();
      break;

    case "Delete an event":
      await manageEventsDelete();
      break;

    case "Load events from seeds":
      generateEvent();
      break;
  }

}

async function manageEventsListByID(): Promise<void> {
  const { eventID } = await inquirer.prompt([
    {
      message: "Please write the event ID",
      type: "input",
      name: "eventID",
    },
  ]);

  eventControllers.listEventByID(eventID);
}

async function manageEventsInsert(): Promise<void> {
  const { eventName, eventDate, eventUserID } = await inquirer.prompt([
    {
      message: "Please write the event name",
      type: "input",
      name: "eventName",
    },
    {
      message: "Please write the event date (dd-mm-yyyy)",
      type: "input",
      name: "eventDate",
    },
    {
      message: "Please write the user ID",
      type: "input",
      name: "eventUserID",
    },
  ]);

  eventControllers.insertIntoEvent(eventName, eventDate, eventUserID);
}

async function manageEventsUpdate(): Promise<void> {
  const { eventID, updateName, updateDate, updateUserID } = await inquirer.prompt([
    {
      message: "Please write the event ID",
      type: "input",
      name: "eventID",
    },
    {
      message: "Please write the new name",
      type: "input",
      name: "updateName",
    },
    {
      message: "Please write the new date (dd-mm-yyyy)",
      type: "input",
      name: "updateDate",
    },
    {
      message: "Please write the new user ID",
      type: "input",
      name: "updateUserID",
    },
  ]);

  eventControllers.updateEvent(eventID, updateName, updateDate, updateUserID);
}

async function manageEventsDelete(): Promise<void> {
  const { eventID } = await inquirer.prompt([
    {
      message: "Please write the event ID",
      type: "input",
      name: "eventID",
    },
  ]);

  eventControllers.deleteEvent(eventID);
}
