import Snacks from './models/snacks'
import Reviews from './models/reviews'
export const GET_ALL_SNAX = 'GET_ALL_SNAX'
export const GET_FEATURED_SNAX = 'GET_FEATURED_SNAX'
export const GET_ONE_SNAX = 'GET_ONE_SNAX'


export const getAllSnax = () => {
  return async (dispatch) => {
    const payload = await Snacks.all()
    dispatch({type: GET_ALL_SNAX, payload})
  }
}

export const getOneSnax = (id) => {
  return async (dispatch) => {
    const payload = await Snacks.find(id)
    dispatch({type: GET_ONE_SNAX, payload})
  }
}

export const getFeaturedSnax = () => {
  return async (dispatch) => {
    const payload = await Snacks.featured()
    dispatch({type: GET_FEATURED_SNAX, payload})
  }
}

export const addSnack = (name, description, price, img, is_perishable) => {
  is_perishable = JSON.parse(is_perishable)
  return async (dispatch) => {
    await Snacks.create(name, description, price, img, is_perishable)
    dispatch(getAllSnax())
  }
}

export const editSnack = (snackId, name, description, price, img, is_perishable) => {
  is_perishable = JSON.parse(is_perishable)
  return async (dispatch) => {
    await Snacks.update(snackId, {name, description, price, img, is_perishable})
    dispatch(getOneSnax(snackId))
  }
}

export const postReview = (snackId, title, text, rating) => {
  return async (dispatch) => {
    await Reviews.create(snackId, {title, text, rating})
    dispatch(getOneSnax(snackId))
  }
}

export const editReview = (snackId, reviewId, title, text, rating) => {
  return async (dispatch) => {
    await Reviews.update(snackId, reviewId, {title, text, rating})
    dispatch(getOneSnax(snackId))
  }
}
