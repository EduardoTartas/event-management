import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

export const db2 = drizzle({ 
  connection: { 
    url: process.env.TURSO_DATABASE_URL!, 
    authToken: process.env.TURSO_AUTH_TOKEN!
  }
});