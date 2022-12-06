import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { sendEmail } from '../apiClient'
function BookingConfirmation() {
  const [email, setEmail] = useState('')
  //Call Api funtion sendemail
  sendEmail(email)
    .then(() => {
      setEmail()
    })
    .catch((err) => {
      console.error(err.message)
    })
  return (
    <>
      <NavLink />
      <div className="dog-description">
        <div className="card card-owner">
          <p className="about-paragraph">
            Thanks for your interest in walking this doggo! Your request has
            been sent to the dog owner and we will be in touch soon. &#128062;
          </p>
        </div>
      </div>
    </>
  )
}
export default BookingConfirmation
