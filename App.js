import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'

// first import createStackNavigator from react-navigation
// then import StackNavigator for creating nested routes
// import { createStackNavigator } from 'react-navigation'

// https://reactnavigation.org/docs/hello-react-navigation/
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Import your screens
import PokeList from './components/PokeList'
import Pokemon from './components/Pokemon'
import Home from './components/Home'

const Stack = createStackNavigator()

// const RootStack = createStackNavigator(
//   {
//     //Define your screens.
//     Home: { screen: Home },
//     PokeList: { screen: PokeList },
//     Pokemon: { screen: Pokemon },
//   },
//   {
//     initialRouteName: 'Home',
//   },
// )

// export default function App() {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.pokeListHeader}>Pokemon API</Text>
//     </ScrollView>
//   )
// }

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pokeListHeader: {
    fontSize: 20,
    color: '#fff',
  },
})
