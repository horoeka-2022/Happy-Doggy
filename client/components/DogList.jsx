import React, { useState, useEffect } from 'react'
import { getDogList } from '../apiClient'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function DogList() {
  const { loginWithRedirect } = useAuth0()
  const [doglist, setDoglist] = useState([])
  const [doginfo, setDogInfo] = useState([])

  useEffect(() => {
    //console.log(doglist)
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
    //console.log(doglist)
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect({ redirectUri: `${window.location.origin}/doglist` })
  }

  return (
    <>
      <h1 className="heading heading-primary">
        Find your cute walking partner
      </h1>
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
            <p className="loading">loading</p>
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
                <p className="dog-description">
                  Introduction: {doglist[0].description}
                </p>
                <IfAuthenticated>
                  <Link
                    to={'/walker/' + doglist[0].imgID}
                    className="btn btn-book"
                  >
                    Take Me For A Walk !!
                  </Link>
                </IfAuthenticated>
                <IfNotAuthenticated>
                  <Link onClick={handleSignIn} className="btn btn-book">
                    Take Me For A Walk !!
                  </Link>
                </IfNotAuthenticated>
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
              <p className="dog-description">
                Introduction: {doginfo.description}
              </p>
              <IfAuthenticated>
                <Link
                  to={'/walker/' + doglist[0].imgID}
                  className="btn btn-book"
                >
                  Take Me For A Walk !!
                </Link>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <Link onClick={handleSignIn} className="btn btn-book">
                  Take Me For A Walk !!
                </Link>
              </IfNotAuthenticated>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default DogList
