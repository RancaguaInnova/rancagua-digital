import React from 'react'
import { View } from 'react-native'
import styles from './styles.js'
import { Image } from 'react-native'

export default class Loading extends React.Component {
    static propTypes = {}

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('assets/images/loading.gif')} />
            </View>
        )
    }
}
