const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
  day: String,
  exercises: [{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
})

const Workout = mongoose.model('Workout', workoutSchema)
module.exports = Workout
