import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function initDB() {
  const db = await open({
    filename: "./data/sco.db",
    driver: sqlite3.Database
  });

  // Create users table if not exists
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    );
  `);

  console.log("Database initialized.");
  await db.close();
}

initDB();
