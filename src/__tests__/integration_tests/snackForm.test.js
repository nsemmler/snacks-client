import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import SnackForm from '../../components/snacks/SnackForm'
import EditSnack from '../../containers/EditSnack'
import AddSnack from '../../containers/AddSnack'

describe('Snack Form Component', () => {
  test('renders consistently', () => {
    const handleEditSnack = () => { EditSnack.handleEditSnack }
    const handleAddSnack = () => { AddSnack.handleAddSnack }
    const singleSnack = {
      id: 1,
      name: "Pork Rinds",
      description: "Mauris lacinia sapien quis libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
      price: 8,
      img: "https://az808821.vo.msecnd.net/content/images/thumbs/0000398_salt-pepper-pork-rinds-2-oz_560.jpeg",
      is_perishable: true
    }

    const form = renderer.create(
      <MemoryRouter>
        <SnackForm handleEditSnack={ handleEditSnack } handleAddSnack={ handleAddSnack } singleSnack={ singleSnack } />
      </MemoryRouter>
    ).toJSON()
    expect(form).toMatchSnapshot()
  })
})
