const request = require('supertest')

const server = require('../server')
const db = require('../db/dogList')
//management in reference to auth0.js file line 43?
const management = require('../auth0')

jest.mock('../db/dogList')
//mocking the path?
jest.mock('../auth0')
//mocking the path?
//write the test
test('GET /v1/doglist/ should return a list of dogs & availibility on the left', () => {
  //getDogList in server routes db js
  db.getDogList.mockImplementation(() => {
    return Promise.resolve([{ breed: 'Pug', dogName: 'Robert' }])
    //returns bunch of dogs
  })
  management.getUser.mockImplementation(() => {
    //mocking line 18 in same file
    //make some mock data of what it returns - it does return the userdata
    return Promise.resolve({
      user_metadata: {
        fullName: 'cj',
        phoneNumber: '02123213',
        address: '12 morgan street',
      },
    })
  })
  return request(server)
    .get('/api/v1/doglist')
    .then((res) => {
      //console.log('hi')
      //console.log(res.body)
      expect(res.statusCode).toBe(200)
      //we expect the response to equal
      expect(res.body).toEqual([
        {
          breed: 'Pug',
          dogName: 'Robert',
          fullName: 'cj',
          phoneNumber: '02123213',
          address: '12 morgan street',
        },
      ])
      expect(true).toBeTruthy()
    })
})

// test('POST /v1/users should accept a body and respond with 201 ', () => {
//   // ARRANGE
//   db.addNewUser.mockImplementation((newUser) => {
//     expect(newUser.id).toBe(1)
//     expect(newUser.name).toBe('wayne is hungry')
//     return Promise.resolve()
//   })

//   const newUser = {
//     id: 1,
//     name: 'wayne is hungry',
//   }
//   // ACT
//   return request(server)
//     .post('/v1/users')
//     .send(newUser)
//     .then((res) => {
//       // ASSERT
//       expect(res.status).toBe(201)
//     })
// })

// test('POST /v1/users respond with 500', async () => {
//   // ARRANGE
//   db.addNewUser.mockImplementation(() => {
//     return Promise.reject(Error('patrick is mad'))
//   })

//   const newUser = {
//     id: 1,
//     name: 'wayne is hungry',
//   }
//   // ACT
//   const res = await request(server).post('/v1/users').send(newUser)
//   // ASSERT
//   expect(res.body.error).toBe('patrick is mad')
//   expect(res.status).toBe(500)
// })
