const connection = require('./ip_address')

// this is a update statement in nodejs
connection.client.execute(
    'UPDATE killrvideo.advocates SET super_power = ? WHERE region = ? AND city = ? AND last_name = ? AND first_name = ?',
    ['wormhole time travel', 'North Carolina', 'Charlotte', 'Veale', 'Cristina'],
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