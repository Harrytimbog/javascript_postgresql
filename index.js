const { Client } = require('pg')
const client = new Client({
  user: "acer",
  password: "Just4u..",
  host: "localhost",
  port: 5432,
  database: "javascript_postgresql"
})

client.connect()
  .then(() => console.log("Connected successfuly"))
  // .then(() => client.query("select * from employees"))
  .then(() => client.query("select * from employees where name = $1", ["Edmond"]))
  .then(results => console.table(results.rows))
  .catch(e => console.log(e))
  .finally(() => client.end())
