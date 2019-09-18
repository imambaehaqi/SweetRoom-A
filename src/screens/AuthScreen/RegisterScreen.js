import React, { Component } from 'react'
import { Container, Text, Header, Title, Body, View } from 'native-base'

import FormRegister from '../../components/FormRegister'

export class RegisterScreen extends Component {
    render() {
        return (
            <Container>
                <Header style = {{backgroundColor: 'white'}}>
                    <Body>
                        <Title>
                            <Text style = {{fontWeight:'bold'}}>REGISTER</Text>
                        </Title>
                    </Body>
                </Header>
                <Container style = {{padding:20}}>
                    <Text style = {{fontWeight:'bold', fontSize:24}}>Welcome to SweetRoom Partner</Text>
                    <FormRegister style = {{padding:20}} navigation = {this.props.navigation}/>
                    <View
                        style={{
                            borderBottomWidth: 0.3,
                            borderBottomColor: 'gray',
                        }}
                    />
                </Container>
            </Container>
        )
    }
}

export default RegisterScreen
