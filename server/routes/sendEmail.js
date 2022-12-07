const express = require('express')
const dotenv = require('dotenv')
const db = require('../db/dogList')
const management = require('../auth0')

dotenv.config()
const sgMail = require('@sendgrid/mail')

const router = express.Router()

module.exports = router

// POST/api/v1/sendEmail

router.post('/', async (req, res) => {
  try {
    await sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const walkerId = req.body.walkerId
    const dogList = await db.getDogListById(walkerId)
    const ownerDetails = await management.getUser(dogList.ownerId)

    const msg = {
      to: ownerDetails.email,
      from: req.body.from,
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.html,
    }
    console.table(msg)
    await sgMail.send(msg)
    res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err.message)
    console.error(err.message)
  }
})
