import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../../components/shared/Navbar'

describe('Navbar Component', () => {
  test('renders consistently', () => {
    const form = renderer.create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    ).toJSON()
    expect(form).toMatchSnapshot()
  })
})
