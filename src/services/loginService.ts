import { db2 } from "../db/dbConfig";
import { usersTable } from "../db/schema/userSchema";
import { eq, and } from "drizzle-orm";

export async function userLogin(email: string, password: string): Promise<any> {
  const result = await db2.select().from(usersTable).where(and(eq(usersTable.email, email), eq(usersTable.password, password)));
  return result.length > 0 ? result[0] : null;
}
