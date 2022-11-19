import { config } from "dotenv";
import { resolve } from "path";
import { Pool } from "pg";
import { z } from "zod";

config({ path: resolve(__dirname, "../../../.env") });

const { DATABASE_URL } = z
  .object({
    DATABASE_URL: z
      .string()
      .default("postgresql://postgres:password@localhost:5432/board"),
  })
  .parse(process.env);

// const { Pool } = require('pg');

const pool = new Pool({
  connectionString: DATABASE_URL,
});
/*
query {
  contacts {
    id, name
  }
}
mutation {
  Contact {
    create(input: { name: "test" }) {
      id
    }
  }
}
mutation {
  Contact {
    update(input: { id: "1", name: "test" }) {
      id
    }
  }
}
mutation {
  Contact {
    remove(input: { id: "1" })
  }
}
*/
export const query = (text: string, params: any[] = []) =>
  pool.query(text, params);
// require.exports = { query: (text, params) => pool.query(text, params) };
