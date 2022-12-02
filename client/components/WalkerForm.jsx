import React from 'react'
import { postWalkerDetails } from '../apiClient'

function WalkerForm(props) {
  // const [Experience, setExperince] = useState('')

  // useEffect(() => {
  //   postWalkerDetails().catch((err) => {
  //     console.error(err.message)
  //   })
  // }, [])

  function handleSubmit(event) {
    event.preventDefault()

    const experience = event.currentTarget.elements.experience.value
    const walkerReason = event.currentTarget.elements.walkerReason.value
    // console.log(
    //   'experience is - ' +
    //     experience +
    //     ' ...and walkerReason is - ' +
    //     walkerReason
    // )
    const submitWalkerObj = {
      experience: experience,
      walkerReason: walkerReason,
    }

    // console.log(submitWalkerObj)
    postWalkerDetails(submitWalkerObj).catch((err) => {
      console.error(err.message)
    })
  }
  return (
    <>
      <h1>Tell us more about your Dog walking experience</h1> <br /> <br />
      <p>I love dogs and I </p> <br />
      <form onSubmit={handleSubmit}>
        <section className="flex flex-col gap-4">
          <div>
            <input
              type="radio"
              id="I love to walk dogs daily"
              name="experience"
              value="Daily"
            />
            <label htmlFor="I love to walk dogs daily">
              I love to walk dogs daily
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="2 or 3 times in a week"
              name="experience"
              value="2 or 3 times in a week"
            />
            <label htmlFor="2 or 3 times in a week">
              2 or 3 times in a week
            </label>
          </div>
          <div>
            <input type="radio" id="Newbie" name="experience" value="Newbie" />
            <label htmlFor="Newbie">I am new to walking Dogs</label>
          </div>
          <br /> <br />
          <label htmlFor="review"> Why I want to walk this Dog.</label>
          <div>
            <textarea
              rows="4"
              cols="50"
              name="walkerReason" //pls double check this field name from database
              placeholder="I would love to walk this dog...."
            ></textarea>
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </section>
      </form>
    </>
  )
}

export default WalkerForm
