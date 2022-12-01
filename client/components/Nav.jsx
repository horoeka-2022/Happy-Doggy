import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
// rebecca added browswerrouter line 2.
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  const { logout, loginWithRedirect, user, isLoading } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/profile`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <section className="nav-container">
        <nav className="nav">
          <div className="rounded-full ...">
            <Link className="logo" to="/">
              <img
                src="./server/public/images/logo.png"
                alt="dog pic"
                className="nav-logo"
              />
            </Link>
          </div>
          <div>
            <IfAuthenticated className="user-nav">
              <Link to="/profile">Profile</Link>
              <Link to="/" onClick={handleLogoff}>
                Log off
              </Link>
              <p>{!isLoading && <span>{user?.email}</span>}</p>
            </IfAuthenticated>

            <IfNotAuthenticated className="guest-nav">
              <Link className="logo" to="/">
                Home
              </Link>
              <Link className="logo" to="/about">
                About
              </Link>
              <Link className="logo" to="/doglist">
                Doglist
              </Link>
              <Link className="signin" to="/" onClick={handleSignIn}>
                Sign In
              </Link>
              <Link className="register" to="/" onClick={handleRegister}>
                Register
              </Link>
            </IfNotAuthenticated>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Nav
