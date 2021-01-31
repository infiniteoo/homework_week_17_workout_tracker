const mongoose = require('mongoose')
const db = mongoose.connection

require('dotenv').config({ path: '../.env' })

const workoutSchema = mongoose.Schema({
  day: String,
  exercises: [{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  }]
})

const Workout = mongoose.model('Workout', workoutSchema)

const connectionString = process.env.CONNECTION_STRING

if (!connectionString) {
  console.error('MongoDB connection string missing!')
  process.exit(1)
}

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

db.on('error', err => {
  console.log('MongoDB error: ' + err.message)
  process.exit(1)
})

db.once('open', () => console.log('MongoDB connection established.'))

module.exports = db