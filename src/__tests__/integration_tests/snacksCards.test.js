import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Cards from '../../components/snacks/Cards'

describe('Snacks Cards Component', () => {
  test('renders consistently', () => {
    const props = [
      {
        id: 1,
        name: "Pork Rinds",
        description: "Mauris lacinia sapien quis libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
        price: 8,
        img: "https://az808821.vo.msecnd.net/content/images/thumbs/0000398_salt-pepper-pork-rinds-2-oz_560.jpeg"
      },
      {
        id: 2,
        name: "Soup - Campbells Beef Noodle",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
        price: 26,
        img: "https://images-na.ssl-images-amazon.com/images/I/71MavWF1P9L._SY550_.jpg"
      }
    ]

    const card = renderer.create(
      <MemoryRouter>
        <Cards props={ props }/>
      </MemoryRouter>
    ).toJSON()
    expect(card).toMatchSnapshot()
  })
})
