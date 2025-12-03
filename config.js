// config.js
module.exports = {
PORT: process.env.PORT || 3000,
JWT_SECRET: process.env.JWT_SECRET || 'replace_this_with_a_secret',
DB_FILE: process.env.DB_FILE || './data/sco.db'
};