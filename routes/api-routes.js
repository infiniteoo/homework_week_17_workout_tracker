const express = require('express')
const db = require('../models/db')
const router = express.Router()

/* GET users listing. */
router.get('/workouts', function (req, res, next) {
  console.log('/workouts get route touched')
})

router.put('/workouts/:id', function (req, res) {
  console.log('weve touched the /api/workouts/:id route: ', req.body)
  db.collection('workouts').insert(req.body, results => {
    console.log('value of results: ', results)
    res.json(req.body)
  })
})

module.exports = router
