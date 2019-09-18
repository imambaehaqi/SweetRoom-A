import React, { Component } from 'react'

import Styles from '../../res/styles'

import IsLogo from '../../components/IsLogo'
import { Container } from 'native-base'

export class SplashScreen extends Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(() => { resolve('result') },2000)
        )
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.replace('Login');
        }
    }

    render() {
        return (
            <Container style = {Styles.containerIsLoading}>
                <IsLogo/>
            </Container>
        )
    }
}

export default SplashScreen
