import {combineReducers} from 'redux'
import {GET_ALL_SNAX, GET_FEATURED_SNAX, GET_ONE_SNAX} from './actions'

const INITIAL_VALUE = []

const snackList = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GET_ALL_SNAX:
      return action.payload
    default:
      return state
  }
}

const singleSnack = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GET_ONE_SNAX:
      return action.payload.data
    default:
      return state
  }
}

const featuredSnacks = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GET_FEATURED_SNAX:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({snackList, featuredSnacks, singleSnack})
