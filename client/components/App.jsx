import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Profile from './Profile'
import Home from './Home'

function App() {
  return (
    <>
      <Nav />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  )
}

export default App
