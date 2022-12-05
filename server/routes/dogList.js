const express = require('express')
const management = require('../auth0')
const { checkJwt } = require('../auth0')
const db = require('../db/dogList')

const router = express.Router()

module.exports = router

// GET /api/v1/doglist
router.get('/', async (req, res) => {
  try {
    const dogLists = await db.getDogList()
    const newDogLists = await Promise.all(
      dogLists.map(async (dogList) => {
        console.log('this is' + dogList.ownerId)
        const ownerDetails = await management.getUser(dogList.ownerId)
        //console.log(ownerDetails)
        return { ...dogList, ...ownerDetails.user_metadata }
      })
    )

    res.json(newDogLists)
  } catch (err) {
    res.status(500).send(err.message)
    console.error(err.message)
  }
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
