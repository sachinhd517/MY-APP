import { SQL, sql } from "drizzle-orm";
import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { SQLJsTransaction } from "drizzle-orm/sql-js";


export const USERS = pgTable('USERS', {
   id: serial('id').primaryKey().notNull(),
   fname:  varchar('fname', {length: 100}).notNull(),
   lanme: varchar('lname',{ length: 100}).notNull(),
   email: varchar('email',{ length: 100}).notNull(),
   provider: varchar('provider',{ length: 20}),
   externalId: varchar('external_id',{ length: 100}).notNull(),
   image: text("image"),
   role: varchar("role", {length: 12}).notNull().default('customer'),
   updateAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
   creatat: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),

});