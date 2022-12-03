const express = require('express')

const db = require('../db/dogList')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getDogList()
    .then((dogList) => {
      res.json(dogList)
    })
    .catch((err) => {
      res.status(500).send(err.message)
      console.error(err.message)
    })
})
