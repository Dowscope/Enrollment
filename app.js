
const firebird = require('node-firebird')
const { db_ip, db_port, db_name, db_user, db_key } = require('./config')

const options = {
    host: db_ip,
    database: db_name,
    user: db_user,
    password: db_key,
}

function runQuery(qry) {
    firebird.attach(options, (err, db) => {
        if (err) throw err
        
        db.query(qry, (err, db) => {
            if (err) throw err
            console.log('Query Sucessful')
            db.detach()
        })
    })
}

function addSchool(bsid, name) {
    const qry_INSERT_SCHOOL = "INSERT INTO schools (school_bsid, school_name) VALUES (\'509566\', \'Sherbrooke P.S.\');"
}

const qry_CREATE_SCHOOL_TABLE = 'CREATE TABLE schools (school_bsid int NOT NULL, school_name varchar(255) NOT NULL, PRIMARY KEY (school_bsid));'