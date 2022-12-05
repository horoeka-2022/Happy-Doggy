import React, { useState } from 'react'

export default function OwnerForm() {
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
  })

  function handleChange(e) {
    setForm(() => ({ ...form, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('submitted!')
  }

  return (
    <>
      <form className="profile-form">
        <h2 className="heading heading-secondary">Tell me about your dog!!</h2>
        <div className="form-container">
          <div className="input-box">
            <label htmlFor="fullName">Dog Name</label>
            <input
              type="text"
              name="dogName"
              className="input-box__input"
              value={form.dogName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="breed">Dog Breed</label>
            <input
              type="text"
              name="breed"
              className="input-box__input"
              value={form.breed}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="dogImage">Put your dog image url here!</label>
            <input
              type="text"
              name="dogImage"
              className="input-box__input"
              value={form.dogImage}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="suburb">Location</label>
            <input
              type="text"
              name="suburb"
              className="input-box__input"
              value={form.suburb}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="availibility">Available Date</label>
            <input
              type="date"
              name="availibility"
              className="input-box__input"
              value={form.availibility}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="needs">Requirement</label>
            <input
              type="text"
              name="needs"
              className="input-box__input"
              value={form.needs}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="introduction">Introduction</label>
            <input
              type="text"
              name="introduction"
              className="input-box__input"
              value={form.introduction}
              onChange={handleChange}
              required
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-form">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
