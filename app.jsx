
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import {
  selectSubreddit, fetchPosts
} from './actions.js'

import rootReducer from './reducers.js'

import App from './components/App.jsx'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() => {
  let state = store.getState()
  if(state && state.postsBySubreddit && state.postsBySubreddit.reactjs) {
    state.postsBySubreddit.reactjs.items.forEach(post => {
      console.log(post.title)
    })
  }  
})

// addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   ,
//   document.querySelector('.main-ui-container'))
// })
