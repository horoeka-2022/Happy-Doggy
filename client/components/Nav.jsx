import React from 'react'
import { Link } from 'react-router-dom'
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
          <Link className="logo" to="/">
            Logo
          </Link>
          <div>
            <IfAuthenticated className="user-nav">
              <Link to="/profile">Profile</Link>
              <Link to="/" onClick={handleLogoff}>
                Log off
              </Link>
              <p>{!isLoading && <span>{user?.email}</span>}</p>
            </IfAuthenticated>

            <IfNotAuthenticated className="guest-nav">
              <Link className="signin" to="/" onClick={handleSignIn}>
                Sign In
              </Link>
              <Link className="register" to="/" onClick={handleRegister}>
                Register
              </Link>
            </IfNotAuthenticated>
          </div>
        </nav>
        <h1 className="heading">Intro</h1>
      </section>
    </>
  )
}

export default Nav
