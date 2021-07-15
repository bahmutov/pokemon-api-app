import React from 'react'

// https://reactnavigation.org/docs/hello-react-navigation/
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Import your screens
import PokeList from './components/PokeList'
import Pokemon from './components/Pokemon'
import Home from './components/Home'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PokeList" component={PokeList} />
        <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
