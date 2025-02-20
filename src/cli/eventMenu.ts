import inquirer from "inquirer";
import * as eventControllers from "../controllers/eventController";

export async function manageEventsMenu() {
  const { manageEventsMenuOption } = await inquirer.prompt([
    {
      message: "Select an option",
      type: "list",
      choices: ["List all events", "List an event by ID", "Insert a new event", "Update an event", "Delete an event",],
      name: "manageEventsMenuOption",
    },
  ]);

  switch (manageEventsMenuOption) {
    case "List all events":
      eventControllers.listAllEvents();
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
  }

}

async function manageEventsListByID() {
  const { eventID } = await inquirer.prompt([
    {
      message: "Please write the event ID",
      type: "input",
      name: "eventID",
    },
  ]);

  eventControllers.listEventByID(eventID);
}

async function manageEventsInsert() {
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

async function manageEventsUpdate() {
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

async function manageEventsDelete() {
  const { eventID } = await inquirer.prompt([
    {
      message: "Please write the event ID",
      type: "input",
      name: "eventID",
    },
  ]);

  eventControllers.deleteEvent(eventID);
}
