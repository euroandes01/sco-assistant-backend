// db.js
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const { DB_FILE } = require('./config');


const dir = path.dirname(DB_FILE);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });


const db = new sqlite3.Database(DB_FILE);


// Run schema if DB new
const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
db.exec(schema, (err) => {
if (err) console.error('Error creating schema', err);
});


module.exports = db;