import React, { PureComponent } from 'react'
import { View, Text, Button, Image } from 'react-native'
//import styles for component
import styles from './styles'

export default function Home({ navigation }) {
  return (
    <View style={styles.homeDiv}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/aa1997/image/upload/v1536011005/Pokemon_HomePage_Icon.png',
        }}
        style={styles.homePageImage}
      />
      <Text style={styles.header}>Welcome to Pokemon API App</Text>
      <Button
        title="Go to Pokes"
        onPress={() => navigation.navigate('PokeList')}
      />
    </View>
  )
}
