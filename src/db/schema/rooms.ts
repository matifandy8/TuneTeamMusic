import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  id: integer("id"),
  name: text("name"),
  created_by: text("created_by"),
});
