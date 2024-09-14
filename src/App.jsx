import React from 'react'
import { Provider } from 'react-redux'
import store from '@store'
import pages from '@pages'

const {Home}= pages

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App