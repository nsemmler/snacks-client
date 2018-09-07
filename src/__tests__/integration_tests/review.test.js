import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Reviews from '../../components/reviews/Reviews'

const Provider = require('react-redux').Provider
const createStore = require('redux').createStore
const reducers = require('../../state/reducers')

describe('Reviews Component', () => {
  test('renders consistently', () => {
    let store = createStore(() => {})

    const reviews = [
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

    const component = renderer.create(
      <Provider store={ store } >
        <MemoryRouter>
          <Reviews props={ reviews } />
        </MemoryRouter>
      </Provider>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
