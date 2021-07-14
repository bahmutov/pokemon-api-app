//import React form react
import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
//import styles fro your PokeCard component.
import styles from './styles'

const PokeCard = ({ name, navigation }) => {
  return (
    <TouchableOpacity
      testID="poke-card"
      style={{ backgroundColor: 'transparent' }}
      onPress={() => navigation.navigate('Pokemon', { name })}
    >
      <View style={styles.listItemContainer}>
        <Text style={styles.pokeItemHeader}>{name}</Text>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg',
          }}
          style={styles.pokeImage}
        />
      </View>
    </TouchableOpacity>
  )
}

export default PokeCard
