const express = require('express')
const path = require('path')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

const app = express()
app.use(express.json())

let db = null
const dbPath = path.join(__dirname, './moviesData.db')

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })

    app.listen(3000, () => {
      console.log('Success')
    })
  } catch (e) {
    console.log(`${e.message}`)
    process.exit(1)
  }
}

app.get('/', (request, response) => {
  response.send('Hellow,  world!')
})

initializeDbAndServer()

module.exports = app
