import Snacks from '../../src/state/models/snacks'

describe('Snacks Model', () => {
  describe('all()', () => {
    test('is defined', () => {
      expect(Snacks.all).toBeDefined()
    })

    test('returns all Snacks', async () => {
      const snacks = await Snacks.all()
      expect(snacks).toBeInstanceOf(Array)
      expect(snacks[0]).toBeInstanceOf(Object)
      expect(snacks[0]).toHaveProperty('id')
      expect(snacks[0]).toHaveProperty('name')
      expect(snacks[0]).toHaveProperty('description')
      expect(snacks[0]).toHaveProperty('price')
      expect(snacks[0]).toHaveProperty('is_perishable')
      expect(snacks[0]).toHaveProperty('reviews')
      expect(snacks[0].reviews).toBeInstanceOf(Array)
    })
  })

  describe('find()', () => {
    test('is defined', () => {
      expect(Snacks.find).toBeDefined()
    })

    test('returns a specific Snack by id', async () => {
      const response = await Snacks.find(1)
      expect(response).toBeInstanceOf(Object)

      const snack = {
        id: 1,
        name: 'Pork Rinds',
        description: 'Mauris lacinia sapien quis libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
        price: 8,
        img: 'https://az808821.vo.msecnd.net/content/images/thumbs/0000398_salt-pepper-pork-rinds-2-oz_560.jpeg',
        is_perishable: true,
        reviews: [
          {
            id: 1,
            title: 'Incredible!',
            text: 'If it were a person I\'d say to it: Is your name Dan Druff? You get into people\'s hair. I mean like, I\'d say that you\'re funny but looks aren\'t everything.',
            rating: 1,
            snack_id: 1
          },
          {
            id: 32,
            title: 'Tasty',
            text: 'If it were a person I\'d say to it: What are you going to do for a face when the baboon wants his butt back? I mean like, You are depriving some poor village of its idiot.',
            rating: 2,
            snack_id: 1
          }
        ]
      }

      expect(response.data).toBeInstanceOf(Object)
      expect(response.data).toMatchObject(snack)
    })

    test('throws an error when an invalid Snack id is provided', async () => {
      expect.assertions(4)

      await expect(Snacks.find(-2)).rejects.toMatchObject({ message: "Invalid Snack ID" })
      await expect(Snacks.find(1.22)).rejects.toMatchObject({ message: "Invalid Snack ID" })
      await expect(Snacks.find([4])).rejects.toMatchObject({ message: "Invalid Snack ID" })
      await expect(Snacks.find()).rejects.toMatchObject({ message: "Invalid Snack ID" })
    })
  })

  describe('featured()', () => {
    test('is defined', () => {
      expect(Snacks.featured).toBeDefined()
    })
  })

  describe('create()', () => {
    test('is defined', () => {
      expect(Snacks.create).toBeDefined()
    })
  })

  describe('update()', () => {
    test('is defined', () => {
      expect(Snacks.update).toBeDefined()
    })

    test('throws an error when an invalid Snack id is provided', async () => {
      expect.assertions(4)

      await expect(Snacks.update(-2, { name: 'update' })).rejects.toMatchObject({ message: "Invalid Snack ID" })
      await expect(Snacks.update(1.22, { name: 'update' })).rejects.toMatchObject({ message: "Invalid Snack ID" })
      await expect(Snacks.update([4], { name: 'update' })).rejects.toMatchObject({ message: "Invalid Snack ID" })
      await expect(Snacks.update(null, { name: 'update' })).rejects.toMatchObject({ message: "Invalid Snack ID" })
    })
  })
})
