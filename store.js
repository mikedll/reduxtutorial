
import { createStore } from 'redux'
import todoApp from './reducers.js'


const store = createStore(todoApp)

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions.js'

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo('Make your bed'))
store.dispatch(addTodo('Take out the trash'))
store.dispatch(addTodo('Clean the garage'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()
