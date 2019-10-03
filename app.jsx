
import ReactDOM from 'react-dom'

import VisibleTodoList from './containers/VisibleTodoList.jsx'
import AddTodo from './containers/AddTodo.jsx'
import Footer from 'components/Footer.jsx'

const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
)

addEventListener('DOMContentLoaded', () => {              
  ReactDOM.render(<App/>, document.querySelector('.app-container'))
})
