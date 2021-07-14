import React, { PureComponent } from 'react'
//import UI from react-native
import { View, Text, Image } from 'react-native'
//import styles for component.
import styles from './styles'

class Pokemon extends PureComponent {
  //Define your navigationOptions as a functino to have access to navigation properties, since it is static.
  static navigationOptions = ({ route }) => ({
    //Use getParam function to get a value, also set a default value if it undefined.
    title: `${route.params.name} Info`,
  })
  //Define your class component
  render() {
    const { route } = this.props
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg',
          }}
          style={styles.pokemonImage}
        />
        <Text testID="pokemon-name" style={styles.nameOfPokemon}>
          {route.params.name}
        </Text>
      </View>
    )
  }
}

export default Pokemon
