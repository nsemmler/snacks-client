import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import AddReview from '../../components/reviews/AddReview'

describe('AddReview Component', () => {
  test('renders consistently', () => {
    const form = renderer.create(
      <MemoryRouter>
        <AddReview />
      </MemoryRouter>
    ).toJSON()
    expect(form).toMatchSnapshot()
  })
})
