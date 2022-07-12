
const firebird = require('node-firebird')
const { db_ip, db_port, db_name, db_user, db_key } = require('./config')

const options = {
    host: db_ip,
    database: db_name,
    user: db_user,
    password: db_key,
}

firebird.attach(options, (err, db) => {
    if (err) throw err
    
    db.query(qry_CREATE_SCHOOL_TABLE, (err, db) => {
        if (err) throw err
        console.log('Query Sucessful')
        db.detach
    })
})

const qry_CREATE_SCHOOL_TABLE = 'CREATE TABLE schools (school_bsid int, school_name varchar(255));'