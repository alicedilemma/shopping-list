const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const { EventEmitter, once } = require('events')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const app = express()

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const uri = `mongodb+srv://${username}:${password}@cluster0-n2w7z.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

let collection = {}
const eventEmitter = new EventEmitter()

const port = process.env.PORT || 5000
app.listen(port)
console.log('App is listening on port ' + port)

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.json())
app.use(cors())

// api endpoints
app.get('/api/list', async (req, res) => {
  if (!collection) {
    once(EventEmitter, '🥑')
  }
  const list = await getListFromDb()
  res.json(list)
  console.log(`Sent list of items! /n ${JSON.stringify(list)}`)
})

app.post('/api/list', async (req, res) => {
  if (!collection) {
    once(EventEmitter, '🥑')
  }
  const result = await updateListOnDb(req.body.list)
  res.json(result)
  console.log(`Updated list of items! /n ${JSON.stringify(result)}`)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

// db
const connectToDb = async () => {
  await client.connect()
  collection = client.db('shopping-list').collection('households')
  eventEmitter.emit('🥑')
}

const getListFromDb = async () => {
  return collection.findOne({ list_id: 1 })
}

const updateListOnDb = async list => {
  return collection.replaceOne({ list_id: 1 }, { list_id: 1, list })
}

connectToDb()
