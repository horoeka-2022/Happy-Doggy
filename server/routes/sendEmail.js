const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const sgMail = require('@sendgrid/mail')

const router = express.Router()

module.exports = router

// POST/api/v1/sendEmail

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: req.body.to,
      from: req.body.from,
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.html,
    }
    await sgMail.send(msg)
    res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err.message)
    console.error(err.message)
  }
})
