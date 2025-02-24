import { eventModel } from "../model/eventModel";
import { db2 } from "../db/dbConfig";
import { eventsTable } from "../db/schema/eventSchema";
import { eq } from "drizzle-orm";

export const insertIntoEvent = async (event: eventModel) => {
  return await db2.insert(eventsTable).values({
    id: event.id || '',
    name: event.name,
    date: event.date,
    user_id: event.user_id
  });
}

export async function listAllEvents(): Promise<any> {
  return await db2.select().from(eventsTable);
}

export async function ListEventByID(id: string): Promise<any> {
  const result = await db2.select().from(eventsTable).where(eq(eventsTable.id, id));
  return result.length > 0 ? result : null;
}

export async function deleteEvent(id: string): Promise<any> {
  return await db2.delete(eventsTable).where(eq(eventsTable.id, id));
}

export async function updateEvent(id: string, name: string, date: string, user_id: string): Promise<any> {
  return await db2.update(eventsTable).set({
    name: name,
    date: date,
    user_id: user_id
  }).where(eq(eventsTable.id, id));
}
