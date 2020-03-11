var mysql = require("mysql");
//creates connection to mysql server
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Password1",
  database: "work_db"
});
//connect. if not throw error
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
//connects all 3 tables in 1 table to server.js
connection.query('SELECT distinct department.dept_name, roles.title, salary, employees.first_name, last_name FROM department join roles ON department.id = roles.dept_id join employees ON roles.id = employees.role_id;', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.table(rows);
  });

