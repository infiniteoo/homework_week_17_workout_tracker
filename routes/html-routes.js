const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Workout Tracker' })
})

router.get('/stats', function (req, res, next) {
  res.render('stats', { title: 'Stats' })
})

router.get('/exercise', function (req, res, next) {
  res.render('exercise', { title: 'Stats' })
})

module.exports = router
