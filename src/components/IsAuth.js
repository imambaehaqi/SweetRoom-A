import React, { Component } from 'react'
import { View, Image } from 'react-native'

import Styles from '../res/styles'

export class IsAuth extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Image source = {require('../assets/img/img-partner.png')} style = {{width:300, height:300}}/>
            </View>
        )
    }
}

export default IsAuth
