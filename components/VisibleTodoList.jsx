
import { connect } from 'react-redux'
import { toggleTodo, VisibiltyFilters } from '../actions.js'

import TodoList from './TodoList.jsx'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case VisibiltyFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed)
  case VisibiltyFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed)
  case VisibiltyFilters.SHOW_ALL:
  default:
    return todos    
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps  
)(TodoList)
