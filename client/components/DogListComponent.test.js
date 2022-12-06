import React from 'react'
import DogList from './DogList'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { getDogList } from '../apiClient'

//import { async } from 'regenerator-runtime'

jest.mock('../apiClient')

test('when the Dog List is rendered, Lilly should be the name of the dog pictured', async () => {
  // ARRANGE
  getDogList.mockImplementation(() =>
    Promise.resolve([
      {
        address: '12 morgan street',
        availibility: '10/12/22',
        breed: 'Bulldog',
        description:
          'Lilly likes to explore and often finds herself becoming too curious about cats and birds. She loves playing in the water and doing zoomies.',
        dogName: 'Lilly',
        fullName: 'JInwoo Park',
        id: 5,
        needs: 'History of chasing cats and birds',
        ownerId: 'auth0|638ac80284d437614af49277',
        phoneNumber: '13214112',
        suburb: 'Waiheke, Auckland',
        walkerId: 'auth0|638ac80284d437614af49277',
      },
    ])
  )

  render(<DogList />)
  //await
  //ACT
  const doggyname = await screen.findByLabelText('Lilly')

  // ASSERT
  expect(doggyname).toBeInTheDocument()
})
