import { StyleSheet } from 'react-native'
import { mainColor } from '../../constants/Colors'
const Styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    /* backgroundColor: 'white', */
    flex: 1,
    alignItems: 'center',
  },
  avatarContainer: {
    textAlign: 'center',
    /* marginTop: 40 */
  },
  listContainer: {
    paddingTop: 20,
    width: '100%',
  },
  listItem: {
    marginBottom: 4,
  },
  menuTitle: {
    /* backgroundColor: 'red', */
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  menuSubtitle: {
    fontSize: 14,
    width: '100%',
    textAlign: 'center',
  },
})

export default Styles
