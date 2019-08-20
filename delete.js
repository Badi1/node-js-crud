const connection = require('./ip_address')

// this is a delete statement in nodejs
connection.client.execute(
    'DELETE FROM killrvideo.advocates WHERE region = ? AND city = ? AND last_name = ? AND first_name = ?',
    ['North Carolina', 'Charlotte', 'Veale', 'Cristina']
)
.then(function (result){
    console.log('Success')
    connection.client.shutdown()
})
.catch(function (error){
     console.log(error.message)
     connection.client.shutdown()
});