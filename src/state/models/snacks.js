import axios from 'axios'
const BASE_URL = 'https://galvanize-snacks-api.herokuapp.com/api'

class Snacks {

  static all = async () => {
    const response = await axios.get(`${BASE_URL}/snacks`)
    const snacks = response.data.data

    return snacks
  }

  static find = async (id) => {
    const response = await axios.get(`${BASE_URL}/snacks/${id}`)
    const snack = response.data

    return snack
  }

  static featured = async () => {
    const response = await axios.get(`${BASE_URL}/snacks/featured`)
    const featured = response.data.data

    return featured
  }

  static create = async (name, description, price, img, is_perishable) => {
    const response = await axios.post(`${BASE_URL}/snacks`, {name, description, price, img, is_perishable})
    const snack = response.data.data
    return snack
  }

  static update = async (id, {name, description, price, img, is_perishable}) => {
    const response = await axios.patch(`${BASE_URL}/snacks/${id}`, {name, description, price, img, is_perishable})
    const snack = response.data.data

    return snack
  }

}
export default Snacks
