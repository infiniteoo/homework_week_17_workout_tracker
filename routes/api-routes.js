const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/workouts', function (req, res, next) {
  console.log('/workouts get route touched')
})

module.exports = router
