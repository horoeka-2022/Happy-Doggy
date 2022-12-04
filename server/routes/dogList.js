const express = require('express')

const { checkJwt } = require('../auth0')
const db = require('../db/dogList')

const router = express.Router()

module.exports = router

// GET /api/v1/doglist
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

// POST /api/v1/doglist
router.post('/', checkJwt, (req, res) => {
  const auth0Id = req.user?.sub
  const description = req.body.description
  db.addWalkerRequest(description, auth0Id)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
      console.error(err.message)
    })
})
