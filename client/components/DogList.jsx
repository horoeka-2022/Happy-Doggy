import React, { useState, useEffect } from 'react'
import { getDogList } from '../apiClient'

function DogList() {
  const [doglist, setDoglist] = useState([])

  const sortedAsc = doglist.sort(
    (objA, objB) => Number(objA.availibility) - Number(objB.date)
  )
  console.log(sortedAsc)

  useEffect(() => {
    console.log(doglist)
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
      <h1 className="heading heading-primary">Find you cute walking partner</h1>
      <div className="doglist-container">
        <ul className="doglist">
          {doglist.map((item) => {
            return (
              <li key={item.imgID}>
                <div className="card card-owner">
                  <h3 className="heading heading-tertiary">{item.dogName}</h3>
                  <h3>{item.breed}</h3>
                  <h3>{item.availibility}</h3>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="doginfo">
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
        </div>
      </div>
      <div className="list-container">
        <div className="doglist"></div>
        <div className="doginfo"></div>
      </div>
    </>
  )
}
export default DogList
