const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    db_ip: process.env.DB_IP,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_key: process.env.DB_KEY,
}