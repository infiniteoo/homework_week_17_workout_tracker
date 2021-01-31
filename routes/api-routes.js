const express = require('express')
const router = express.Router()

/* GET users listing. */
router.put('/api/workouts', function (req, res, next) {
  console.log('req, res, next', req, res, next)
})

module.exports = router
