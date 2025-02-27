import { userModel } from "../model/userModel";
import { db } from "../db/dbConfig";
import { usersTable } from "../db/schema/userSchema";
import { eq } from "drizzle-orm";

export async function verifyUser(id: string): Promise<any> {
  const result = await db.select().from(usersTable).where(eq(usersTable.id, id));
  return result.length > 0 ? result : null;
}

export const insertUserService = async (user: userModel) => {
  return await db.insert(usersTable).values({
    id: user.id || '',
    name: user.name,
    email: user.email,
    password: user.password
  });
}

export async function listAllUsers(): Promise<any> {
  return await db.select().from(usersTable);
}

export async function ListUserByID(id: string): Promise<any> {
  const result = await db.select().from(usersTable).where(eq(usersTable.id, id));
  return result.length > 0 ? result : null;
}

export async function deleteUser(id: string): Promise<any> {
  return await db.delete(usersTable).where(eq(usersTable.id, id));
}

export async function updateUser(id: string, name: string, email: string, password: string): Promise<any> {
  return await db.update(usersTable).set({
    name: name,
    email: email,
    password: password
  }).where(eq(usersTable.id, id));
}
