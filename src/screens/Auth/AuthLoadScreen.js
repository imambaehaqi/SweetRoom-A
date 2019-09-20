import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class AuthLoadingScreen extends React.Component {
    componentDidMount = async () => {
        await AsyncStorage.getItem('token')
            .then(
                (result) => this.props.navigation.navigate(result ? 'InitMain' : 'InitAuth')
            )
    }

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}