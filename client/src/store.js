import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

// Reducers
const combinedReducer = combineReducers({
  counter: counterReducer
})

const rootReduder = (state, action) => {
  if (state && state.signout !== undefined) {
    // Clear all store data
    state = undefined
  }

  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReduder
})
