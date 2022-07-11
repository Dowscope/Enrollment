const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    db_ip: process.env.DB_IP,
    db_port: process.env.DB_PORT,
    masterkey: process.env.MASTERKEY,
}