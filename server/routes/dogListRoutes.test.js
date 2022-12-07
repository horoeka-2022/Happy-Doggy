const request = require('supertest')

const server = require('../server')
const db = require('../db/dogList')

const management = require('../auth0')

jest.mock('../db/dogList')
jest.mock('../auth0')

test('GET /v1/doglist/ should return a list of dogs & availibility on the left', () => {
  //ARRANGE
  db.getDogList.mockImplementation(() => {
    return Promise.resolve([{ breed: 'Pug', dogName: 'Robert' }])
  })
  management.getUser.mockImplementation(() => {
    return Promise.resolve({
      user_metadata: {
        fullName: 'cj',
        phoneNumber: '02123213',
        address: '12 morgan street',
      },
    })
  })
  //ACT
  return request(server)
    .get('/api/v1/doglist')
    .then((res) => {
      //ASSERT
      expect(res.statusCode).toBe(200)

      expect(res.body).toEqual([
        {
          breed: 'Pug',
          dogName: 'Robert',
          user_metadata: {
            address: '12 morgan street',
            fullName: 'cj',
            phoneNumber: '02123213',
          },
        },
      ])
      // expect(true).toBeTruthy()
    })
})
