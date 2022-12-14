const { getDogList } = require('./dogList.js')
const knex = require('knex')
const config = require('./knexfile')
const testDb = knex(config.test)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('db functions', () => {
  test('it should return a list of dogs from our database and displays them on the left side of the screen', () => {
    expect.assertions(2)

    return getDogList(testDb).then((dogList) => {
      expect(dogList).toHaveLength(6)
      expect(dogList[0].dogName).toBe('Lilly')
    })
  })
})
