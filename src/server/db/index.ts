import { env } from "~/env";
import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";

import ws from "ws";
neonConfig.webSocketConstructor = ws;

import * as schema from "./schema";

const sql = neon(env.PG_DATABASE_URL);
export const db = drizzle(sql, { schema });
