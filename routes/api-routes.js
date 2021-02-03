const express = require('express')
const { ObjectId } = require('mongodb')
const db = require('../models/db')
const router = express.Router()

router.get('/workouts', function (req, res, next) {
  console.log('/workouts GET route touched')
  db.collection('workouts').find({}).toArray((err, items) => {
    if (err) {
      throw err
    } else {
      res.json(items)
    }
  })
})

router.get('/workouts/range', function (req, res) {
  console.log('/api/workouts/range touched!')
  db.collection('workouts').find({}).toArray((err, items) => {
    if (err) {
      throw err
    } else {
      res.json(items)
    }
  })
})

// this adds a new exercise to the  array of the supplied id's workout in req.params
router.put('/workouts/:id', function (req, res) {
  console.log('the id of the param is:', req.params.id)
  console.log('weve touched the PUT /api/workouts/:id route:', req.body)

  if (req.params.id === 'undefined') {
    const finalObjectToInsert = {
      day: new Date().setDate(new Date().getDate()),
      totalDuration: req.body.duration,
      exercises: [req.body]
    }
    db.collection('workouts').insertOne(finalObjectToInsert)
      .then(result => {
        console.log('the value of result after making a new workout', result.ops[0])
        res.json(result.ops[0])
      })
  } else {
    let newTotalDuration = 0
    db.collection('workouts').find(ObjectId(req.params.id)).toArray((err, items) => {
      if (err) {
        throw err
      } else {
        console.log('items', items)
        // iterate over exercises array and grab ALL durations and add to total
        if (items[0].exercises) {
          console.log('we found this ---------------', items[0].exercises)
          items[0].exercises.forEach(element => {
            if (element.duration) { newTotalDuration += element.duration }
          })
        }

        console.log('updatedDuration:', newTotalDuration)
        newTotalDuration += req.body.duration
        console.log('updatedDuration:', newTotalDuration)
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
      ).then(results => res.json(results.ops))
    }
  }
})

// post route for /api/workouts that creates a whole new workout

router.post('/workouts', function (req, res) {
  console.log('weve touched the POST /api/workouts route')
  const finalObjectToInsert = {
    day: new Date().setDate(new Date().getDate()),
    totalDuration: req.body.duration,
    exercises: [req.body]
  }
  db.collection('workouts').insertOne(finalObjectToInsert)
    .then(result => {
      console.log('the value of result after making a new workout', result.ops[0])
      res.json(result.ops[0])
    })
})

module.exports = router
