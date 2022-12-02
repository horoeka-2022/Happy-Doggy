import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <h1 className="heading heading-primary">This is Happy Doggy Homepage</h1>
      <h2 className="heading heading-secondary">We love dogs!!</h2>

      <div className="card-container">
        <div className="card card-owner">
          <img
            className="card-img"
            src="/server/public/images/owner-card.jpg"
            alt="a dog being loved"
          />
          <h3 className="heading heading-tertiary">
            for owners / happy doggies
          </h3>
          <p className="card__intro">
            do you need someone to take care of your dog??
          </p>
          <NavLink
            to="/ownerform"
            className="btn btn-owner"
            onClick={!isAuthenticated && handleSignIn}
          >
            Click me!!
          </NavLink>
        </div>
        <div className="card card-walker">
          <img
            className="card-img"
            src="/server/public/images/walker-card.jpg"
            alt="two happy dogs walking"
          />
          <h3 className="heading heading-tertiary">for walkers</h3>
          <p className="card__intro">
            do you want to walk with our happy doggies???
          </p>
          <Link to="/doglist" className="btn btn-owner">
            Click me!!
          </Link>
        </div>
      </div>
    </>
  )
}
