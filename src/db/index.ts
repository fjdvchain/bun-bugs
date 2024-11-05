import { drizzle } from "drizzle-orm/bun-sqlite";
import { applicationLogTable } from "./schema"

export const db = drizzle(process.env.DB_FILE_NAME!);

export const createLog = async (message: string, username: string) => {
  return db.insert(applicationLogTable).values({
    log: message,
    username,
  });
}