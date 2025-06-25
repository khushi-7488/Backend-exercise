const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'SQL@Account'
})
connection.query("SHOW TABLES",(err, result)=>{
    console.log(result);
})
