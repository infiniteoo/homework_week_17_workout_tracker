const express = require('express')
const db = require('../models/db')
const router = express.Router()

/* GET users listing. */
router.get('/workouts', function (req, res, next) {
  console.log('/workouts get route touched')
  db.collection('workouts').find({}).toArray((err, items) => {
    if (err) {
      throw err
    } else {
      console.log(items)
      res.json(items)
    }
  })
})

// need to write to the 'day' variable by adding a Date()
router.put('/workouts/:id', function (req, res) {
  console.log('weve touched the /api/workouts/:id route:', req.body)
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
