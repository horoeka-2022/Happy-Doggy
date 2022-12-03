import React, { useState, useEffect } from 'react'
import { getDogList } from '../apiClient'

function DogList() {
  const [doglist, setDoglist] = useState([])
  //console.log(doglist)

  useEffect(() => {
    getDogList()
      .then((result) => {
        setDoglist(() => result)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <h1>Find you cute walking partner</h1>
      {console.log(doglist)}
      {doglist.map((item) => {
        return (
          <>
            <div className="card-container">
              <div className="card card-owner">
                <img
                  className="card-img"
                  src={'./server/public/images/' + item.imgID + '.jpg'}
                  alt="doggy"
                />
                <h3 className="heading heading-tertiary">{item.dogName}</h3>
                <h3>{item.breed}</h3>
                <h3>{item.availibility}</h3>
                <h3>{item.description}</h3>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}
export default DogList
