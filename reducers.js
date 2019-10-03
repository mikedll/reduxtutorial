
import update from 'immutability-helper'
import { combineReducers } from 'redux'

import {
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  VisibilityFilters,
  addTodo, toggleTodo, setVisibilityFilter } from './actions.js'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter
  default:
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    return [...state, {
        text: action.text,
        completed: false
      }]
  case TOGGLE_TODO:
    return update(state, {[action.index]: {completed: {$set: !state[action.index].completed}}})
  default:
    return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
