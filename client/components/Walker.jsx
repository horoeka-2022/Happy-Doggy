import React from 'react'
import Nav from './Nav'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Walker() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    return (
      <>
        <Nav />
        <h1>About Happy Doggy!</h1>
        <p>
          “Dogs never talk about themselves but listen to you while you talk
          about yourself, and keep up an appearance of being interested in the
          conversation.”
        </p>
        <form onSubmit={handleSubmit}>
          <section className="flex flex-col gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              required={true}
            />
            <input type="text" name="author" placeholder="Author" />
            <input
              type="number"
              name="price"
              placeholder="Price"
              required
              pattern="[0-9]*"
            />
            <Button>Submit</Button>
          </section>
        </form>
      </>
    )
  }
}

export default Walker
