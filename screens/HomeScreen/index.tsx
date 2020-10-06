import * as React from 'react'
import { StyleSheet, Text } from 'react-native'

import { View } from '../../components/Themed'
import News from './news'
const CityScreen = ({ navigation }: props) => {
  console.log(navigation)
  return (
    <View>
      {/* <Text>HOLA</Text> */}
      <News {...navigation} />
    </View>
  )
}

export default CityScreen
