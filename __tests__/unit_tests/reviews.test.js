import Reviews from '../../src/state/models/reviews'

describe('Reviews Model', () => {
  describe('create()', () => {
    test('is defined', () => {
      expect(Reviews.create).toBeDefined()
    })

    test('creates a new Reviews', async () => {
      const response = await Reviews.create(16, {
        title: "Zesty!",
        text: "Zest for days!!",
        rating: 5
      })

      expect(response).toBeInstanceOf(Object)

      const review = response.data[0]

      expect(review).toBeInstanceOf(Object)
      expect(review).toHaveProperty('id')
      expect(review).toHaveProperty('title', 'Zesty!')
      expect(review).toHaveProperty('text', 'Zest for days!!')
      expect(review).toHaveProperty('rating', 5)
      expect(review).toHaveProperty('snack_id', 16)
    })

    test('throws an error when an invalid Reviews parameters are provided', async () => {
      expect.assertions(10)

      await expect(Reviews.create(4.5, {
        title: "Zesty!",
        text: "Zest for days!!",
        rating: 5
      })).rejects.toMatchObject({ message: "Invalid Snack ID" })

      await expect(Reviews.create(null, {
        title: "Zesty!",
        text: "Zest for days!!",
        rating: 5
      })).rejects.toMatchObject({ message: "Invalid Snack ID" })

      await expect(Reviews.create('16', {
        title: "Zesty!",
        text: "Zest for days!!",
        rating: 5
      })).rejects.toMatchObject({ message: "Invalid Snack ID" })

      await expect(Reviews.create([1], {
        title: "Zesty!",
        text: "Zest for days!!",
        rating: 5
      })).rejects.toMatchObject({ message: "Invalid Snack ID" })

      await expect(Reviews.create(16, {
        text: "Zest for days!!",
        rating: 5
      })).rejects.toMatchObject({ message: "Invalid Review Title" })

      await expect(Reviews.create(16, {
        title: { title: 'title' },
        text: "Zest for days!!",
        rating: 5
      })).rejects.toMatchObject({ message: "Invalid Review Title" })

      await expect(Reviews.create(16, {
        title: "Zesty!",
        rating: 5
      })).rejects.toMatchObject({ message: "Invalid Review Text" })

      await expect(Reviews.create(16, {
        title: "Zesty!",
        text: 3,
        rating: 5
      })).rejects.toMatchObject({ message: "Invalid Review Text" })

      await expect(Reviews.create(16, {
        title: "Zesty!",
        text: "Zest for days!!",
        rating: null
      })).rejects.toMatchObject({ message: "Invalid Review Rating" })

      await expect(Reviews.create(16, {
        title: "Zesty!",
        text: "Zest for days!!",
        rating: '5'
      })).rejects.toMatchObject({ message: "Invalid Review Rating" })
    })
  })

  describe('update()', () => {
    test('is defined', () => {
      expect(Reviews.update).toBeDefined()
    })

    test('updates a Review', async () => {
      const response = await Reviews.update(4, 4, {
        title: "eh",
        text: "it was ok",
        rating: 2
      })

      expect(response).toBeInstanceOf(Object)

      const review = response.data[0]

      expect(review).toBeInstanceOf(Object)
      expect(review).toHaveProperty('id', 4)
      expect(review).toHaveProperty('title', 'eh')
      expect(review).toHaveProperty('text', 'it was ok')
      expect(review).toHaveProperty('rating', 2)
      expect(review).toHaveProperty('snack_id', 4)
    })

    test('throws an error when invalid Reviews ID or Snacks ID provided', async () => {
      expect.assertions(8)

      await expect(Reviews.update(null, 4, {
        title: "eh",
        text: "it was ok",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Snack ID" })

      await expect(Reviews.update('4', 4, {
        title: "eh",
        text: "it was ok",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Snack ID" })

      await expect(Reviews.update([4], 4, {
        title: "eh",
        text: "it was ok",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Snack ID" })

      await expect(Reviews.update(4.2, 4, {
        title: "eh",
        text: "it was ok",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Snack ID" })

      await expect(Reviews.update(4, null, {
        title: "eh",
        text: "it was ok",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Review ID" })

      await expect(Reviews.update(4, 'four', {
        title: "eh",
        text: "it was ok",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Review ID" })

      await expect(Reviews.update(4, 1.1, {
        title: "eh",
        text: "it was ok",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Review ID" })

      await expect(Reviews.update(4, { id: 4 }, {
        title: "eh",
        text: "it was ok",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Review ID" })
    })

    test('throws an error when invalid Reviews parameters provided', async () => {
      expect.assertions(6)

      await expect(Reviews.update(4, 4, {
        text: "it was ok",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Review Title" })

      await expect(Reviews.update(4, 4, {
        title: 1,
        text: "it was ok",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Review Title" })

      await expect(Reviews.update(4, 4, {
        title: "eh",
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Review Text" })

      await expect(Reviews.update(4, 4, {
        title: "eh",
        text: ["it was ok"],
        rating: 2
      })).rejects.toMatchObject({ message: "Invalid Review Text" })

      await expect(Reviews.update(4, 4, {
        title: "eh",
        text: "it was ok",
      })).rejects.toMatchObject({ message: "Invalid Review Rating" })

      await expect(Reviews.update(4, 4, {
        title: "eh",
        text: "it was ok",
        rating: 2.2
      })).rejects.toMatchObject({ message: "Invalid Review Rating" })
    })
  })
})
