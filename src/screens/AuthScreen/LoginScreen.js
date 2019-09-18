import React, { Component } from 'react'
import { Header, Title, Body, Container, Text } from 'native-base'

import Styles from '../../res/styles'
import IsAuth from '../../components/IsAuth'
import FormLogin from '../../components/FormLogin'

export class LoginScreen extends Component {
    render() {
        return (
            <Container>
                <Header style = {{backgroundColor: 'white'}}>
                    <Body>
                        <Title>
                            <Text style = {{fontWeight:'bold'}}>PARTNER</Text>
                        </Title>
                    </Body>
                </Header>
                <Container style = {{padding:10}}>
                    <IsAuth/>
                    <FormLogin navigation = {this.props.navigation}/>
                </Container>
            </Container>
        )
    }
}

export default LoginScreen
