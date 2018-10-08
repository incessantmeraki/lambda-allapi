var express = require('express')

var router = express.Router()

router.get('/api', async (req,res) => {
  res.json({message: 'reply from server'})
})

module.exports = router
