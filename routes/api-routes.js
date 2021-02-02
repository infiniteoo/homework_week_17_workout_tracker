const express = require('express')
const { ObjectId } = require('mongodb')
const db = require('../models/db')
const router = express.Router()

/* GET users listing. */
router.get('/workouts', function (req, res, next) {
  console.log('/workouts GET route touched')
  db.collection('workouts').find({}).toArray((err, items) => {
    if (err) {
      throw err
    } else {
      console.log(items)
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
      console.log(items)
      res.json(items)
    }
  })
})

// instead of writing a new entry into the database, this should actually add a new exercise to the array of the supplied id in the req.params
router.put('/workouts/:id', function (req, res) {
  console.log('the id of the param is:', req.params.id)
  console.log('weve touched the PUT /api/workouts/:id route:', req.body)

  if (req.params.id === 'undefined') {
    const finalObjectToInsert = {
      day: new Date().setDate(new Date().getDate()),
      exercises: [req.body]
    }
    db.collection('workouts').insertOne(finalObjectToInsert, results => {
      console.log('value of results: ', results)
      res.json(req.body)
    })
  } else {
    db.collection('workouts').updateOne(
      { _id: ObjectId(req.params.id) },
      {
        $push: {
          exercises: req.body
        }
      }
    )
    res.json(req.body)
  }
})

// need to create a post route for /api/workouts that creates a whole new workout

router.post('/workouts', function (req, res) {
  console.log('weve touched the POST /api/workouts route:', req.body)
  const finalObjectToInsert = {
    day: new Date().setDate(new Date().getDate()),
    exercises: [req.body]
  }
  db.collection('workouts').insertOne(finalObjectToInsert, results => {
    console.log('value of results: ', results)
    res.json(req.body)
  })
})

module.exports = router
