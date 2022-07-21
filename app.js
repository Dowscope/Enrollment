
const firebird = require('node-firebird')
const { db_ip, db_port, db_name, db_user, db_key } = require('./config')

const options = {
    host: db_ip,
    port: db_port,
    database: db_name,
    user: db_user,
    password: db_key,
}

var qry = "CREATE TABLE Users (UserID int,username varchar(255),password varchar(255));"
qry = "INSERT INTO Users (UserID, username, password) VALUES ('1', 'tdowling', 'test');"

firebird.attach(options, (err, db) => {
    if (err) throw err
    db.query(qry, (err, result) => {
        if (err) throw err
        console.log(result)
        db.detach()
    })
});
