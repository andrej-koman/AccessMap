import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: integer("id").primaryKey(),
  token: varchar("token", { length: 256 }).unique().notNull(),
  disabilityId: integer("disability_id").notNull(),
  expirationDate: integer("expiration_date")
    .notNull()
    .$default(() => Date.now() + 1000 * 60 * 60 * 24 * 365),
  roleId: integer("role_id").notNull(),
  createdAt: integer("created_at").default(Date.now()).notNull(),
  updatedAt: integer("updated_at").$onUpdate(() => Date.now()),
});

export const marker = pgTable("marker", {
  id: integer("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  lat: integer("lat"),
  lng: integer("lng"),
  disabilityId: integer("disability_id").notNull(),
  markerType: varchar("marker_type", { length: 256 }), // This will be an enum
  createdAt: integer("created_at").default(Date.now()).notNull(),
  updatedAt: integer("updated_at").$onUpdate(() => Date.now()),
});

export const markerDisability = pgTable("marker_disability", {
  id: integer("id").primaryKey(),
  markerId: integer("marker_id").notNull(),
  disabilityId: integer("disability_id").notNull(),
  createdAt: integer("created_at").default(Date.now()).notNull(),
  updatedAt: integer("updated_at").$onUpdate(() => Date.now()),
});

export const userDisability = pgTable("user_disability", {
  id: integer("id").primaryKey(),
  userId: integer("user_id").notNull(),
  disabilityId: integer("disability_id").notNull(),
  createdAt: integer("created_at").default(Date.now()).notNull(),
  updatedAt: integer("updated_at").$onUpdate(() => Date.now()),
});

export const disability = pgTable("disability", {
  id: integer("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  createdAt: integer("created_at").default(Date.now()).notNull(),
  updatedAt: integer("updated_at").$onUpdate(() => Date.now()),
});

export const role = pgTable("role", {
  id: integer("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  createdAt: integer("created_at").default(Date.now()).notNull(),
  updatedAt: integer("updated_at").$onUpdate(() => Date.now()),
});
