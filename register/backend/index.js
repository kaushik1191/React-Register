const express = require('express')
const app = express()
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

/*connection.query('SELECT * FROM users', (err,rows) => {
    if(err) throw err;
  
    console.log('--- Data received from Db: ---\n');
    console.log(rows);
});*/

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
console.log('Express started on port 3000');