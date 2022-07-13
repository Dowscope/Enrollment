
const firebird = require('node-firebird')
const { db_ip, db_port, db_name, db_user, db_key } = require('./config')

const options = {
    host: db_ip,
    port: db_port,
    database: db_name,
    user: db_user,
    password: db_key,
}

async function runQuery(qry) {
    var results = []
    await firebird.attach(options, (err, db) => {
        if (err) throw err
        db.query(qry, (err, result) => {
            if (err) throw err
            this.results = result
            db.detach()
        })
    })
    return results
}

function addSchool(bsid, name) {
    const qry = "INSERT INTO schools (school_bsid, school_name) VALUES (\'509566\', \'Sherbrooke P.S.\')"
}

function listSchools() {
    const qry = "SELECT * FROM schools"
    runQuery(qry).then(function(result){
        console.log(result)
    })
    // for (r of results) {
    //     //console.log('BSID: ' + r.school_bsid + ' - Name: ' + r.school_name)
    // }
}


listSchools()