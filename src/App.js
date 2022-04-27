import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { createAppContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './stores'
import { enableScreens } from 'react-native-screens'
enableScreens()

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  )
}

export default App
