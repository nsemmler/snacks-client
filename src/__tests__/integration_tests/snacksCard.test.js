import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import SingleCard from '../../components/snacks/Card'

describe('Snacks Card Component', () => {
  test('renders consistently', () => {
    const sample = {
      id: 1,
      name: "Pork Rinds",
      description: "Mauris lacinia sapien quis libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
      price: 8,
      img: "https://az808821.vo.msecnd.net/content/images/thumbs/0000398_salt-pepper-pork-rinds-2-oz_560.jpeg"
    }

    const card = renderer.create(
      <MemoryRouter>
        <SingleCard card={ sample }/>
      </MemoryRouter>
    ).toJSON()
    expect(card).toMatchSnapshot()
  })
})
