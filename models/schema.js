const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
  day: Date(),
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
module.exports = Workout
