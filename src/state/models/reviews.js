import axios from 'axios'
const BASE_URL = 'https://galvanize-snacks-api.herokuapp.com/api'

class Reviews {

  static create = async (snackId, {title, text, rating}) => {
    const response = await axios.post(`${BASE_URL}/snacks/${snackId}/reviews`, {title, text, rating})
    const review = response.data
    
    return review
  }

  static update = async (snackId, reviewId, {title, text, rating}) => {
    const response = await axios.patch(`${BASE_URL}/snacks/${snackId}/reviews/${reviewId}`, {title, text, rating})
    const review = response.data

    return review
  }

}
export default Reviews
