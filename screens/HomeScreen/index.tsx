import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import News from './news'
const CityScreen=({ navigation}:props) =>{
    console.log(navigation)
  return (
      <View >
      <News {...navigation}/>
      </View>
  );
}

export default CityScreen