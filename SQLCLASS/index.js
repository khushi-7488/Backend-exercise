const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'SQL@Account'
})
try{
    connection.query("SHOW TABLES",(err, result)=>{
        if(err) throw err;
        console.log(result);
    })
}catch (err){
    console.log(err);
}
