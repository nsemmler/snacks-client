import Reviews from '../../src/state/models/reviews'

describe('Reviews Model', () => {
  describe('create()', () => {
    test('is defined', () => {
      expect(Reviews.create).toBeDefined()
    })
  })

  describe('update()', () => {
    test('is defined', () => {
      expect(Reviews.update).toBeDefined()
    })

    // test('throws an error when an invalid Review id is provided', async () => {
    //   expect.assertions(4)
    //
    //   await expect(Reviews.update(-2, { name: 'update' })).rejects.toMatchObject({ message: "Invalid Snack ID" })
    //   await expect(Reviews.update(1.22, { name: 'update' })).rejects.toMatchObject({ message: "Invalid Snack ID" })
    //   await expect(Reviews.update([4], { name: 'update' })).rejects.toMatchObject({ message: "Invalid Snack ID" })
    //   await expect(Reviews.update(null, { name: 'update' })).rejects.toMatchObject({ message: "Invalid Snack ID" })
    // })
  })
})
