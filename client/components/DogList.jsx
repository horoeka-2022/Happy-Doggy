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

  async function handleClick(id) {
    const selectedDog = await doglist.find((el) => el.imgID === id)
    setDogInfo(selectedDog)
    console.log(doglist)
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
          {doglist.length < 1 ? (
            <p>loading</p>
          ) : doginfo.length < 1 ? (
            <>
              <div className="info-container">
                <img
                  className="dog-img"
                  src={'./server/public/images/' + doglist[0].imgID + '.jpg'}
                  alt="doggy"
                />
                <p className="heading heading-tertiary">
                  Name: {doglist[0].dogName}
                </p>
                <p>Breed: {doglist[0].breed}</p>
                <p>Available Date: {doglist[0].availibility}</p>
                <p>Introduction: {doglist[0].description}</p>
                <Link
                  to={'/walker/' + doglist[0].imgID}
                  className="btn btn-book"
                >
                  Take Me For A Walk !!
                </Link>
              </div>
            </>
          ) : (
            <div className="info-container">
              <img
                className="dog-img"
                src={'./server/public/images/' + doginfo.imgID + '.jpg'}
                alt="doggy"
              />
              <p className="heading heading-tertiary">
                Name: {doginfo.dogName}
              </p>
              <p>Breed: {doginfo.breed}</p>
              <p>Available Date: {doginfo.availibility}</p>
              <p>Introduction: {doginfo.description}</p>
              <Link to={'/walker/' + doginfo.imgID} className="btn btn-book">
                Take Me For A Walk !!
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default DogList
