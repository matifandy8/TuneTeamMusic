import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const rooms = sqliteTable("rooms", {
  id: text("id"),
  name: text("name"),
  created_by: text("created_by"),
});
