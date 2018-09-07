import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Jumbotron from '../../components/shared/Jumbotron'

describe('Jumbotron Component', () => {
  test('renders consistently', () => {
    const sample = {
      height: '100px',
      title: 'Title',
      subtitle: 'Subtitle'
    }
    const form = renderer.create(
      <MemoryRouter>
        <Jumbotron props={ sample }/>
      </MemoryRouter>
    ).toJSON()
    expect(form).toMatchSnapshot()
  })
})
