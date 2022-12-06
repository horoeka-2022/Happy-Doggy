import React, { useState, useEffect } from 'react'
import { fetchImgUrl, sendEmail } from '../apiClient'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function Walker() {
  const dogId = useParams()
  const navigate = useNavigate()
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()

  const [dogImgUrl, setDogImgUrl] = useState('')
  const [msg, setMessage] = useState('')

  useEffect(() => {
    fetchImgUrl(dogId)
      .then((url) => {
        setDogImgUrl(() => url.body)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleChange(e) {
    setMessage(() => e.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const emailRequest = {
      to: user.email,
      from: 'happy.4.doggy@gmail.com',
      subject: 'Booking request recieved',
      text: `Thanks ${user.given_name} for your booking, your request is sent to the Owner. We will get back to you shortly`,
      html:
        msg +
        'Thanks  asdasdasd' +
        user.given_name +
        ' for your booking, your request is sent to the Owner. We will get back to you shortly',
    }

    await sendEmail(emailRequest).catch((err) => {
      console.error(err.message)
    })
    navigate('/bookingConfirmation')
  }
  return (
    <>
      <h1 className="heading heading-tertiary">
        Tell us more about your Dog walking experience
      </h1>{' '}
      <br /> <br />
      <br />
      <div className="card-container">
        <div className="card card-owner">
          <img className="card-img" src={dogImgUrl} alt="doggy" />
          <form onSubmit={handleSubmit}>
            <section className="flex flex-col gap-4">
              <br /> <br />
              <label htmlFor="review">
                <h2>
                  Why I want to walk this Happy Doggy, and my experience with
                  dogs.
                </h2>
              </label>
              <div>
                <textarea
                  rows="4"
                  cols="50"
                  value={msg}
                  onChange={handleChange}
                  name="walkerReason"
                  placeholder="I would love to walk this dog because...."
                ></textarea>
              </div>
              <NavLink
                className="btn btn-owner"
                to="/bookingConfirmation"
                onClick={
                  (!isAuthenticated && handleSignIn) ||
                  (isAuthenticated && handleSubmit)
                }
              >
                Walk me!!
              </NavLink>
            </section>
          </form>
        </div>
      </div>
    </>
  )
}

export default Walker
