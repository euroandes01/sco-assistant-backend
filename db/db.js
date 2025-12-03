// db/db.js
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const DB_FILE = process.env.DB_FILE || path.join(__dirname, '..', 'data', 'sco.db');

const dir = path.dirname(DB_FILE);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const db = new sqlite3.Database(DB_FILE, (err) => {
  if (err) console.error('SQLite open error', err);
});

// Run basic schema
const schema = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sco_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  text TEXT,
  score INTEGER,
  summary TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
`;
db.exec(schema, (err) => {
  if (err) console.error('Error creating schema', err);
});

module.exports = db;
