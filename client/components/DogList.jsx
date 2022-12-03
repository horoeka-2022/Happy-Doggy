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
      <h1 className="heading heading-primary">Find you cute walking partner</h1>
      <div className="list-container">
        <div className="doglist"></div>
        <div className="doginfo"></div>
      </div>
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

      <img
        src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
        alt="doggy"
      />
    </>
  )
}
export default DogList
