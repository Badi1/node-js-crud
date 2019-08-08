const connection = require('./ip_address')

// this is a delete statement in nodejs
connection.client.execute(
    'DELETE FROM crud.users WHERE first_name = ?',
    ['Bob']
)
.then(function (result){
    console.log('Success')
    connection.client.shutdown()
})
.catch(function (error){
     console.log(error.message)
     connection.client.shutdown()
});