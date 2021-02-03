const express = require('express')
const { ObjectId } = require('mongodb')
const db = require('../models/db')
const router = express.Router()

router.get('/workouts', function (req, res, next) {
  db.collection('workouts').find({}).toArray((err, items) => {
    if (err) {
      throw err
    } else {
      res.json(items)
    }
  })
})

router.get('/workouts/range', function (req, res) {
  db.collection('workouts').find({}).toArray((err, items) => {
    if (err) {
      throw err
    } else {
      res.json(items)
    }
  })
})

// this adds a new exercise to the array of the supplied id's workout in req.params
router.put('/workouts/:id', function (req, res) {
  let newTotalDuration = 0
  db.collection('workouts').find(ObjectId(req.params.id)).toArray((err, items) => {
    if (err) {
      throw err
    } else {
      // iterate over exercises array and grab ALL durations and add to total
      if (items[0].exercises) {
        items[0].exercises.forEach(element => {
          if (element.duration) { newTotalDuration += element.duration }
        })
      }
      newTotalDuration += req.body.duration
      updateWorkout()
    }
  })
  function updateWorkout () {
    db.collection('workouts').updateOne(
      { _id: ObjectId(req.params.id) },
      {
        $push: { exercises: req.body },
        $set: { totalDuration: newTotalDuration }
      }
    ).then(results => res.json(ObjectId(req.params.id)))
  }
})

// post route for /api/workouts that creates a whole new workout

router.post('/workouts', function (req, res) {
  const newWorkoutObject = {
    day: new Date().setDate(new Date().getDate()),
    totalDuration: 0
  }
  db.collection('workouts').insertOne(newWorkoutObject)
    .then(result => res.json(result.ops[0]))
})

module.exports = router
