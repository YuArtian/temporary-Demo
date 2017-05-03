import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/index.js'
import configureStore from './store/index.js'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)