import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Footer from '../../components/shared/Footer'

describe('Footer Component', () => {
  test('renders consistently', () => {
    const form = renderer.create(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    ).toJSON()
    expect(form).toMatchSnapshot()
  })
})
