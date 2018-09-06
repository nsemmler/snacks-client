import Snacks from '../../state/models/snacks'

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

    test('returns 3 featured Snacks', async () => {
      const response = await Snacks.featured()
      expect(response).toBeInstanceOf(Array)
      expect(response).toHaveLength(3)

      const sampleSnack = response[0] ? response [0] : response [1]

      expect(sampleSnack).toBeInstanceOf(Object)
      expect(sampleSnack).toHaveProperty('name')
      expect(sampleSnack).toHaveProperty('description')
      expect(sampleSnack).toHaveProperty('price')
      expect(sampleSnack).toHaveProperty('img')
      expect(sampleSnack).toHaveProperty('is_perishable')
    })
  })

  describe('create()', () => {
    test('is defined', () => {
      expect(Snacks.create).toBeDefined()
    })

    test('creates a new Snack', async () => {
      const initialSnacksLength = await Snacks.all()
      const response = await Snacks.create(
        "Donut",
        "A fresh, glazed Krispy Kreme donut",
        1,
        "https://www.krispykreme.com/getattachment/1aa956f7-e7ca-4e27-bcc6-a603211d7c68/Original-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
        true
      )

      const currSnacksLength = await Snacks.all()

      expect(response).toBeInstanceOf(Array)
      expect(response[0]).toBeInstanceOf(Object)
      expect(response[0]).toHaveProperty('id')
      expect(response[0]).toHaveProperty('name', "Donut")
      expect(response[0]).toHaveProperty('description', "A fresh, glazed Krispy Kreme donut")
      expect(response[0]).toHaveProperty('price', 1)
      expect(response[0]).toHaveProperty('img', "https://www.krispykreme.com/getattachment/1aa956f7-e7ca-4e27-bcc6-a603211d7c68/Original-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg")
      expect(response[0]).toHaveProperty('is_perishable', true)
      await expect(currSnacksLength.length).toBe(initialSnacksLength.length + 1)
    })

    test('throws an error when an invalid Snack parameters are provided', async () => {
      expect.assertions(10)

      await expect(Snacks.create(null, "A donut", 1, "google.com", true)).rejects.toMatchObject({ message: "Invalid Snack Name" })
      await expect(Snacks.create(["string of stuff"], "A donut", 1, "google.com", true)).rejects.toMatchObject({ message: "Invalid Snack Name" })
      await expect(Snacks.create("Donut", null, 1, "google.com", true)).rejects.toMatchObject({ message: "Invalid Snack Description" })
      await expect(Snacks.create("Donut", {"A": "donut"}, 1, "google.com", true)).rejects.toMatchObject({ message: "Invalid Snack Description" })
      await expect(Snacks.create("Donut", "A donut", "google.com", true)).rejects.toMatchObject({ message: "Invalid Snack Price" })
      await expect(Snacks.create("Donut", "A donut", -1, "google.com", true)).rejects.toMatchObject({ message: "Invalid Snack Price" })
      await expect(Snacks.create("Donut", "A donut", 1.1, "google.com", true)).rejects.toMatchObject({ message: "Invalid Snack Price" })
      await expect(Snacks.create("Donut", "A donut", 1, null, true)).rejects.toMatchObject({ message: "Invalid Snack Img" })
      await expect(Snacks.create("Donut", "A donut", 1, "google.com", 'true')).rejects.toMatchObject({ message: "Invalid Snack Perishable Value" })
      await expect(Snacks.create("Donut", "A donut", 1, "google.com")).rejects.toMatchObject({ message: "Invalid Snack Perishable Value" })
    })
  })

  describe('update()', () => {
    test('is defined', () => {
      expect(Snacks.update).toBeDefined()
    })

    test('updates a Snack', async () => {
      const initialSnacksLength = await Snacks.all()

      const response = await Snacks.update(27, {
        name: "Donut",
        description: "A fresh, glazed Krispy Kreme donut",
        price: 1,
        img: "https://www.krispykreme.com/getattachment/1aa956f7-e7ca-4e27-bcc6-a603211d7c68/Original-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
        is_perishable: true
      })

      const currSnacksLength = await Snacks.all()

      expect(response).toBeInstanceOf(Array)
      expect(response[0]).toBeInstanceOf(Object)
      expect(response[0]).toHaveProperty('id', 27)
      expect(response[0]).toHaveProperty('name', "Donut")
      expect(response[0]).toHaveProperty('description', "A fresh, glazed Krispy Kreme donut")
      expect(response[0]).toHaveProperty('price', 1)
      expect(response[0]).toHaveProperty('img', "https://www.krispykreme.com/getattachment/1aa956f7-e7ca-4e27-bcc6-a603211d7c68/Original-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg")
      expect(response[0]).toHaveProperty('is_perishable', true)
      await expect(currSnacksLength.length).toBe(initialSnacksLength.length)
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
