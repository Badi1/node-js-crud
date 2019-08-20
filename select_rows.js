const connection = require('./ip_address')

// this is a select statement in nodejs
connection.client
.execute('SELECT * FROM killrvideo.advocates WHERE region = ? AND city = ? AND last_name = ? AND first_name = ?',
['North Carolina', 'Charlotte', 'Veale', 'Cristina'])
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