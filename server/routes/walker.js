const express = require('express')
const db = require('../db/dogList')

const router = express.Router()

module.exports = router

// Post /api/v1/walker
router.post('/:id', async (req, res) => {
  try {
    const { id } = req.body
    const dogUrl = await db.getImgUrl(id)
    console.log(dogUrl)
    res.json(dogUrl[0].url)
  } catch (err) {
    res.status(500).send(err.message)
    console.error(err.message)
  }
})
