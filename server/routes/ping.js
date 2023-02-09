const express = require('express')

const router = express.Router()

module.exports = router

// GET /api/v1/ping/
router.get('/', async (req, res) => {
  return res.json({ test: 'hello', port: process.env.PORT })
})
