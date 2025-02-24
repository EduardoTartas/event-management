import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const eventsTable = sqliteTable("events_table", {
  id: text().primaryKey(),
  name: text().notNull(),
  date: text().notNull(),
  user_id: text().notNull(),
});