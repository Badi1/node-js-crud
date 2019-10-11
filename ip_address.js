const cassandra = require('cassandra-driver');

function init_connection(){
    var connection = {}
    connection.client = new cassandra.Client({ 
        cloud: { secureConnectBundle: 'secure-connect-NAME.zip' },
        credentials: { username: 'USERNAME', password: 'PASSWORD' } 
    });
    return connection
}

connection = init_connection()

module.exports = connection;