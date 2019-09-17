import React, { Component } from 'react'
import { Image, View } from 'react-native'
import Styles from '../res/styles'

export class IsLogo extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Image source = {require('../assets/img/logo-2.png')} style = {Styles.sizeLogo}/>
            </View>
        )
    }
}

export default IsLogo
