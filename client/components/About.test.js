import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import About from './About'

test('hello', () => {
  render(<About />)

  const component = screen.getByRole('heading', { level: 1 })

  expect(component.textContent).toBe('About Happy Doggy')
})
