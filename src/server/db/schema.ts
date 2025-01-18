// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `AccessMap_${name}`);

export const user = createTable(
  "user",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    token: text("token", { length: 256 }).unique().notNull(),
    disabilityId: int("disability_id", { mode: "number" }).notNull(),
    expirationDate: int("expiration_date", { mode: "timestamp" }).notNull().$default(
      () => new Date(Date.now() + 1000 * 60 * 60 * 24 * 365)
    ),
    roleId: int("role_id", { mode: "number" }).notNull(),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
    )
  }
)

export const marker = createTable(
  "marker",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }),
    lat: int("lat", { mode: "number" }),
    lng: int("lng", { mode: "number" }),
    disabilityId: int("disability_id", { mode: "number" }).notNull(),
    markerType: text("marker_type", { length: 256 }), // This will be an enum
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
    )
  }
)

export const markerDisability = createTable(
  "marker_disability",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    markerId: int("marker_id", { mode: "number" }).notNull(),
    disabilityId: int("disability_id", { mode: "number" }).notNull()
  }
)

export const userDisability = createTable(
  "user_disability",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    userId: int("user_id", { mode: "number" }).notNull(),
    disabilityId: int("disability_id", { mode: "number" }).notNull()
  }
)

export const disability = createTable(
  "disability",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
    )
  }
)

export const role = createTable(
  "role",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
    )
  }
)