const connection = require('./ip_address')

// this is a update statement in nodejs
connection.client.execute(
    'UPDATE crud.users SET age = ? WHERE first_name = ?',
    [40,'Bob'],
    { prepare : true }
)
.then(function (result){
    console.log('Success')
    connection.client.shutdown()
})
.catch(function (error){
     console.log(error.message)
     connection.client.shutdown()
});