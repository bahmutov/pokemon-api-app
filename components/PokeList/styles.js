//import styleSheet for creating a css abstraction.
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#000',
  },
  pokeItemHeader: {
    color: '#fff',
    fontSize: 24,
  },
  pokeImage: {
    backgroundColor: 'transparent',
    height: 50,
    width: 50,
  },
})

export default styles
