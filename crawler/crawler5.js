//read stock no from mysql database

//mysql2是一個第三方套件
//npm i mysql
//引用進來
const mysql = require("mysql2/promise");

(async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "admin",
    password: "12345",
    database: "nodejs_db",
  });

  let [data, fields] = await connection.execute("SELECT * FROM stocks");
  console.log(data);

  // results [
  //     [],
  //     []
  // ]
  //let data = results[0];
  //let fields = results[1];

  connection.end();
})();
