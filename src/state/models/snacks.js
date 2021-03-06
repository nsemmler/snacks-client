import axios from 'axios'
const BASE_URL = 'https://galvanize-snacks-api.herokuapp.com/api'

class Snacks {
  // static all = async () => {
  static async all () {
    const response = await axios.get(`${BASE_URL}/snacks`)
    const snacks = response.data.data
    return snacks
  }

  // static find = async (id) => {
  static async find (id) {
    if (!id || !Number.isInteger(id) || id < 0) return Promise.reject(new Error('Invalid Snack ID'))

    const response = await axios.get(`${BASE_URL}/snacks/${id}`)
    const snack = response.data
    return snack
  }

  // static featured = async () => {
  static async featured () {
    const response = await axios.get(`${BASE_URL}/snacks/featured`)
    const featured = response.data.data

    return featured
  }

  // static create = async (...) => {
  static async create (name, description, price, img, is_perishable) {
    if (!name || typeof name !== 'string') return Promise.reject(new Error('Invalid Snack Name'))
    if (!description || typeof description !== 'string') return Promise.reject(new Error('Invalid Snack Description'))
    if (!price || !Number.isInteger(price) || price < 0) return Promise.reject(new Error('Invalid Snack Price'))
    if (!img || typeof img !== 'string') return Promise.reject(new Error('Invalid Snack Img'))
    if (!is_perishable || typeof is_perishable !== 'boolean') return Promise.reject(new Error('Invalid Snack Perishable Value'))

    const response = await axios.post(`${BASE_URL}/snacks`, {name, description, price, img, is_perishable})
    const snack = response.data.data
    return snack
  }

  // static update = async (...) => {
  static async update (id, {name, description, price, img, is_perishable}) {
    if (!id || !Number.isInteger(id) || id < 0) return Promise.reject(new Error('Invalid Snack ID'))

    const response = await axios.patch(`${BASE_URL}/snacks/${id}`, {name, description, price, img, is_perishable})
    const snack = response.data.data
    return snack
  }
}

export default Snacks
