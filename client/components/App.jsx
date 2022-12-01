import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'

import Home from './Home'
import Walker from './Walker'

function App() {
  return (
    <>
      <Nav />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/walker" element={<Walker />} />
        </Routes>
      </main>
    </>
  )
}

export default App
