const connection = require('./ip_address')

// this is a select statement in nodejs
connection.client.execute('SELECT * FROM crud.users')
.then(function(result){
    result.rows.forEach(row => {
        console.log(row)
    })
    connection.client.shutdown()
})
.catch(function(error){
    console.log(error.message)
    connection.client.shutdown()
});