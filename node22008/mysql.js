var mysql=require('mysql');
//创建一个连接
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
  password:'root',
  database:'nodejs',
})

connection.connect();
connection.query('SELECT 1 + 1 AS solution',function(error,results,fields){
    if(error)throw error;
    console.log('The solution is:',results[1])
});
connection.end();