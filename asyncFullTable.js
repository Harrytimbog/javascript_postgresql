const { Client } = require('pg')
const client = new Client({
  user: "acer",
  password: "Just4u..",
  host: "localhost",
  port: 5432,
  database: "javascript_postgresql"
})

execute()

async function execute() {
  try {

    await client.connect()
    console.log("Connected successfully.")
    //await client.query("insert into employees values (1, 'John')")

    const { rows } = await client.query("select * from employees")
    console.table(rows)

  }
  catch (ex) {
    console.log(`Something wrong happend ${ex}`)
  }
  finally {
    await client.end()
    console.log("Client disconnected successfully.")
  }

}
