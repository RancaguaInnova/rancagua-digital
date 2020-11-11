import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'

import { client } from './providers/ApolloProvider'
import store from './providers/StateProvider'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Button, ThemeProvider } from 'react-native-elements'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'

export default function App() {
    const isLoadingComplete = useCachedResources()
    const colorScheme = useColorScheme()

    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <SafeAreaProvider>
                <ApolloProvider client={client}>
                    <Provider store={store}>
                        <ThemeProvider>
                            <Navigation colorScheme={colorScheme} />
                            <StatusBar />
                        </ThemeProvider>
                    </Provider>
                </ApolloProvider>
            </SafeAreaProvider>
        )
    }
}
