import React, { useState, useEffect } from 'react'
import { postWalkerDetails, fetchImgUrl } from '../apiClient'
import { useParams, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function Walker() {
  const dogID = useParams()

  const { isAuthenticated, loginWithRedirect, user } = useAuth0()

  const [dogImgUrl, setDogImgUrl] = useState('')

  useEffect(() => {
    fetchImgUrl(dogID)
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

  function handleSubmit(event) {
    event.preventDefault()

    const experience = event.currentTarget.elements.experience.value
    const walkerReason = event.currentTarget.elements.walkerReason.value

    const submitWalkerObj = {
      experience: experience,
      walkerReason: walkerReason,
    }

    postWalkerDetails(submitWalkerObj).catch((err) => {
      console.error(err.message)
    })
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
                {' '}
                <h2>
                  Why I want to walk this Happy Doggy, and my experience with
                  dogs.
                </h2>
              </label>
              <div>
                <textarea
                  rows="4"
                  cols="50"
                  name="walkerReason" //pls double check this field name from database
                  placeholder="I would love to walk this dog because...."
                ></textarea>
              </div>
              <NavLink
                className="btn btn-owner"
                to="/bookingConfirmation"
                onClick={!isAuthenticated && handleSignIn}
              >
                Walk me!!
              </NavLink>
            </section>
          </form>{' '}
        </div>
      </div>
    </>
  )
}

export default Walker
