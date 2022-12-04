import React, { useState, useEffect } from 'react'
import { getDogList } from '../apiClient'
import { Link } from 'react-router-dom'

function DogList() {
  const [doglist, setDoglist] = useState([])
  const [doginfo, setDogInfo] = useState([])

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

  function handleClick(id) {
    console.log(id)
  }

  return (
    <>
      <h1 className="heading heading-primary">Find you cute walking partner</h1>
      <div className="doglist-container">
        <ul className="doglist">
          {doglist.map((item) => {
            return (
              <li
                className="doglist-item"
                key={item.imgID}
                onClick={() => handleClick(item.imgID)}
              >
                <p className="item-name">Name: {item.dogName}</p>
                <p className="item-breed">Breed: {item.breed}</p>
                <p className="item-date">Available Date: {item.availibility}</p>
              </li>
            )
          })}
        </ul>
        <div className="doginfo">
          {/* {doginfo === [] && <p>no data<p/>} */}
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
                    <Link
                      to={'/walker/' + item.imgID}
                      className="btn btn-owner"
                    >
                      Take Me For A Walk
                    </Link>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default DogList
