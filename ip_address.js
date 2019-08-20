const cassandra = require('cassandra-driver');


function init_connection(){
    var connection = {}
    connection.ip_address = '52.53.148.124';
    connection.dc = 'DC1'
    connection.path_to_creds=''
    connection.client = new cassandra.Client({ 
        contactPoints: [connection.ip_address],
        localDataCenter: connection.dc 
    });
    return connection
}

connection = init_connection()

module.exports = connection;