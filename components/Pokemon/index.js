import React, { PureComponent } from 'react'
//import UI from react-native
import { View, Text, Image } from 'react-native'
//import styles for component.
import styles from './styles'

class Pokemon extends PureComponent {
  static navigationOptions = ({ route }) => ({
    title: `${route.params.name} Info`,
  })

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
