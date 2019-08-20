const connection = require('./ip_address')

// this is a insert statement in nodejs
connection.client.execute(
    'INSERT INTO killrvideo.advocates (first_name, last_name, region, city, super_power) VALUES (?,?,?,?,?)',
    ['Cristina', 'Veale', 'North Carolina', 'Charlotte', 'time travel'], 
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