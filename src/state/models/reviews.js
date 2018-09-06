import axios from 'axios'
const BASE_URL = 'https://galvanize-snacks-api.herokuapp.com/api'

class Reviews {
  // static create = async (...) => {
  static async create (snackId, {title, text, rating}) {
    if (!snackId || !Number.isInteger(snackId) || snackId < 0) return Promise.reject(new Error('Invalid Snack ID'))

    if (!title || typeof title !== 'string') return Promise.reject(new Error('Invalid Review Title'))
    if (!text || typeof text !== 'string') return Promise.reject(new Error('Invalid Review Text'))
    if (!rating || !Number.isInteger(rating) || rating < 0) return Promise.reject(new Error('Invalid Review Rating'))

    const response = await axios.post(`${BASE_URL}/snacks/${snackId}/reviews`, {title, text, rating})
    const review = response.data
    return review
  }

  // static update = async (...) => {
  static async update (snackId, reviewId, {title, text, rating}) {
    if (!snackId || !Number.isInteger(snackId) || snackId < 0) return Promise.reject(new Error('Invalid Snack ID'))
    if (!reviewId || !Number.isInteger(reviewId) || reviewId < 0) return Promise.reject(new Error('Invalid Review ID'))

    if (!title || typeof title !== 'string') return Promise.reject(new Error('Invalid Review Title'))
    if (!text || typeof text !== 'string') return Promise.reject(new Error('Invalid Review Text'))
    if (!rating || !Number.isInteger(rating) || rating < 0) return Promise.reject(new Error('Invalid Review Rating'))

    const response = await axios.patch(`${BASE_URL}/snacks/${snackId}/reviews/${reviewId}`, {title, text, rating})
    const review = response.data
    return review
  }

}
export default Reviews
