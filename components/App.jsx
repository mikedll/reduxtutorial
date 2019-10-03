
import React from 'react'

import VisibleTodoList from 'containers/VisibleTodoList.jsx'
import AddTodo from 'containers/AddTodo.jsx'
import Footer from './Footer.jsx'

const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
)

export default App
