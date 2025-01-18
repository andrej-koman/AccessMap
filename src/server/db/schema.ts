import { pgTable, integer, varchar, serial } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  token: varchar("token", { length: 256 }).unique().notNull(),
  disabilityId: integer("disability_id").notNull(),
  expirationDate: integer("expiration_date")
    .notNull()
    .$default(() => Date.now() + 1000 * 60 * 60 * 24 * 365),
  roleId: integer("role_id").notNull(),
});

export const marker = pgTable("marker", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  lat: varchar("lat", { length: 256 }),
  lng: varchar("lng", { length: 256 }),
  markerType: varchar("marker_type", { length: 256 }), // This will be an enum
});

export const markerDisability = pgTable("marker_disability", {
  id: serial("id").primaryKey(),
  markerId: integer("marker_id").notNull(),
  disabilityId: integer("disability_id").notNull(),
});

export const userDisability = pgTable("user_disability", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  disabilityId: integer("disability_id").notNull(),
});

export const disability = pgTable("disability", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});

export const role = pgTable("role", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});
