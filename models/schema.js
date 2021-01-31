const mongoose = require('mongoose')

require('dotenv').config({ path: '../.env' })

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString)

const db = mongoose.connection

db.on('error', err => {
  console.error('MongoDB error: ' + err.message)
  process.exit(1)
})

db.once('open', () => console.log('MongoDB connection established.'))
