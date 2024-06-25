import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigations from './navigations/rootNavigations'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Mystore from './redux/myStore'
const App = () => {
  return (
    <Provider store={Mystore}>

<NavigationContainer>
    <RootNavigations/>
</NavigationContainer>
    </Provider>

   
  )
}

export default App
