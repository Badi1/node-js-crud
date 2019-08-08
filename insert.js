const connection = require('./ip_address')

// this is a insert statement in nodejs
connection.client.execute(
    'INSERT INTO crud.users (first_name,last_name,age) VALUES (?,?,?)',
    ['Bob','Boberson',30], 
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