import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull(),
  reviewedBy: text("reviewed_by"),
  status: text("status", {
    enum: [
      "PROCESSING",
      "PENDING_REVIEW",
      "COMPLETE",
      "CANCELLED",
      "FAILED",
      "REJECTED",
    ],
  }).notNull(),
  note: text('note'),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const applicationLogTable = sqliteTable("application_logs", {
  id: integer("id").primaryKey(),
  username: text("username").notNull(),
  log: text("log").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});
