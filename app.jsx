
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducers.js'

import App from './components/App.jsx'

const store = createStore(todoApp)


addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.querySelector('.main-ui-container')
})
