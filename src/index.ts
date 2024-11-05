import { db } from './db'
import { sql } from 'drizzle-orm' 

const query = sql`select "hello world" as text`;
const result = db.get<{ text: string }>(query);
console.log("Hello via Bun! " + result);