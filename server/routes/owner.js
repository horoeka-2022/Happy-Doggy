const express = require('express')

const db = require('../db/owner')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  db.getDogList()
    .then((dogList) => {
      res.json(dogList)
    })
    .catch((err) => {
      res.status(500).send(err.message)
      console.error(err.message)
    })
})
