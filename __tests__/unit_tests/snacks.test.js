const snacks = require('../../src/state/models/snacks')

describe('Snacks Model', () => {
  describe('all()', () => {
    test('is defined', () => {
      console.log(snacks);
      expect(snacks.all).toBeDefined()
    })

    // test('returns all snacks', async () => {
    //   const response = await snacks.all()
    //   console.log(response)
    //   expect(response).toBeInstanceOf(Array)
    // })
  })

  // describe('getFeatured()', () => {
  //   test('is defined', () => {
  //     expect(snacks.getFeatured).toBeDefined()
  //   })
  //
  //   test('returns an array of 3 randomly-selected snacks', async () => {
  //     const responseArr = await snacks.getFeatured()
  //
  //     expect(responseArr).toBeInstanceOf(Array)
  //     expect(responseArr).toHaveLength(3)
  //     const firstSnack = responseArr[0] ? responseArr[0] : responseArr[1]
  //     expect(firstSnack).toHaveProperty('name')
  //     expect(firstSnack).toHaveProperty('description')
  //     expect(firstSnack).toHaveProperty('price')
  //     expect(firstSnack).toHaveProperty('img')
  //     expect(firstSnack).toHaveProperty('is_perishable')
  //   })
  // })

  // describe('generateRandomId()', () => {
  //   test('is defined', () => {
  //     expect(snacks.generateRandomId).toBeDefined()
  //   })
  //
  //   test('generates a random number between 0 and x', () => {
  //     const value = snacks.generateRandomId(10)
  //
  //     expect(value).toBeGreaterThanOrEqual(0)
  //     expect(value).toBeLessThanOrEqual(10)
  //   })
  //
  //   test('throws invalidQuantity when given an improper params', async () => {
  //     expect.assertions(3)
  //
  //     await expect(snacks.generateRandomId()).rejects.toMatchObject({ message: 'invalidQuantity' })
  //     await expect(snacks.generateRandomId(-10)).rejects.toMatchObject({ message: 'invalidQuantity' })
  //     await expect(snacks.generateRandomId([1, 2, 3])).rejects.toMatchObject({ message: 'invalidQuantity' })
  //   })
  // })

  // describe('create()', () => {
  //   test('is defined', () => {
  //     expect(snacks.create).toBeDefined()
  //   })
  //
  //   test('creates a new snack', async () => {
  //     const initialSnacksLength = await snacks.index()
  //     const newSnackArr = await snacks.create({
  //       name: "Donut",
  //       description: "A fresh, glazed Krispy Kreme donut",
  //       price: 1,
  //       img: "https://www.krispykreme.com/getattachment/1aa956f7-e7ca-4e27-bcc6-a603211d7c68/Original-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
  //       is_perishable: true
  //     })
  //
  //     const snack = newSnackArr[0]
  //     const numSnacks = await snacks.index()
  //
  //     expect(snack).toBeInstanceOf(Object)
  //     expect(snack).toHaveProperty('id')
  //     expect(snack).toHaveProperty('name')
  //     expect(snack).toHaveProperty('description')
  //     expect(snack).toHaveProperty('price')
  //     expect(snack).toHaveProperty('img')
  //     expect(snack).toHaveProperty('is_perishable')
  //     await expect(numSnacks.length).toBe(initialSnacksLength.length + 1)
  //   })
  //
  //   test('throws aFieldRequired when missing params', async () => {
  //     expect.assertions(1)
  //
  //     await expect(snacks.create({
  //       name: "Pinecone",
  //       description: "Rich in fiber"
  //     })).rejects.toMatchObject({ message: 'aFieldRequired' })
  //   })
  //
  //   test('throws superfluousSnackFields when missing params', async () => {
  //     expect.assertions(1)
  //
  //     await expect(snacks.create({
  //       name: "Donut",
  //       description: "A fresh, glazed Krispy Kreme donut",
  //       price: 1,
  //       img: "https://www.krispykreme.com/getattachment/1aa956f7-e7ca-4e27-bcc6-a603211d7c68/Original-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
  //       is_perishable: true,
  //       test: true
  //     })).rejects.toMatchObject({ message: 'superfluousSnackFields' })
  //   })
  // })

  // describe('update()', async () => {
  //   test('is defined', () => {
  //     expect(snacks.update).toBeDefined()
  //   })
  //
  //   test('identifies a particular snack given its ID and updates it', async () => {
  //     const response = await snacks.update(1, {
  //       name: "New Name"
  //     })
  //
  //     const expected = {
  //       id: 1,
  //       name: 'New Name',
  //       description: 'Mauris lacinia sapien quis libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
  //       price: 8,
  //       img: 'https://az808821.vo.msecnd.net/content/images/thumbs/0000398_salt-pepper-pork-rinds-2-oz_560.jpeg',
  //       is_perishable: true
  //     }
  //
  //     expect(response).toBeInstanceOf(Array)
  //     expect(response[0]).toBeInstanceOf(Object)
  //     expect(response[0]).toMatchObject(expected)
  //     expect(response[0]).toHaveProperty('id')
  //     expect(response[0]).toHaveProperty('name')
  //     expect(response[0]).toHaveProperty('description')
  //     expect(response[0]).toHaveProperty('price')
  //     expect(response[0]).toHaveProperty('img')
  //     expect(response[0]).toHaveProperty('is_perishable')
  //     expect(response[0].name).toEqual('New Name')
  //   })
  //
  //   test('throws snackNotFound when invalid ID provided', async () => {
  //     expect.assertions(3)
  //
  //     await expect(snacks.update('1', { name: "New Name" })).rejects.toMatchObject({ message: 'snackNotFound' })
  //     await expect(snacks.update([1], { name: "New Name" })).rejects.toMatchObject({ message: 'snackNotFound' })
  //     await expect(snacks.update(null, { name: "New Name" })).rejects.toMatchObject({ message: 'snackNotFound' })
  //   })
  //
  //   test('throws aFieldRequired when no snack body provided', async () => {
  //     expect.assertions(1)
  //
  //     await expect(snacks.update(1, {})).rejects.toMatchObject({ message: 'aFieldRequired' })
  //   })
  //
  //   test('throws superfluousSnackFields when snack body provided with invalid key/value pair(s)', async () => {
  //     expect.assertions(1)
  //
  //     await expect(snacks.update(1, { notSnackKey: "value" })).rejects.toMatchObject({ message: 'superfluousSnackFields' })
  //   })
  // })

  // describe('destroy()', async () => {
  //   test('is defined', () => {
  //     expect(snacks.destroy).toBeDefined()
  //   })
  //
  //   test('deletes a snack by ID', async () => {
  //     const initialSnacksLength = await snacks.index()
  //     const response = await snacks.destroy(1)
  //     const numSnacks = await snacks.index()
  //
  //     expect(response).toBeTruthy()
  //     await expect(numSnacks.length).toBe(initialSnacksLength.length - 1)
  //   })
  //
  //   test('throws snackNotFound when invalid ID provided', async () => {
  //     expect.assertions(3)
  //
  //     await expect(snacks.destroy()).rejects.toMatchObject({ message: 'snackNotFound' })
  //     await expect(snacks.destroy('1')).rejects.toMatchObject({ message: 'snackNotFound' })
  //     await expect(snacks.destroy([1])).rejects.toMatchObject({ message: 'snackNotFound' })
  //   })
  // })
})
