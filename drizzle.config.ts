import type { Config } from "drizzle-kit";

export default {
  dialect: "sqlite",
  schema: "./src/db/schema/*",
  driver: "turso",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL!,
    authToken: process.env.NEXT_PUBLIC_DATABASE_AUTH_TOKEN,
  },
  out: "./drizzle",
} satisfies Config;
