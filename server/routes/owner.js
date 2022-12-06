const express = require('express')
const db = require('../db/dogList')
const { checkJwt } = require('../auth0')

const router = express.Router()

module.exports = router

router.post('/', checkJwt, async (req, res) => {
  try {
    const auth0_id = req.user?.sub
    await db.addPost(req.body, auth0_id)
    res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err.message)
    console.error(err.message)
  }
})

module.exports = router
