import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { Header, Title, Body, Container } from 'native-base'

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
                        <Text style = {{color: 'black', fontWeight:'bold'}}>PARTNER</Text>
                    </Title>
                </Body>
                </Header>
                    <ScrollView>
                        <View style = {Styles.containerAuthStack}>
                            <IsAuth/>
                            <FormLogin navigation={this.props.navigation}/>
                            <Text style = {{fontWeight:'bold', textAlign:'center', marginVertical:10, fontSize:16}}>
                                Or
                            </Text>
                            <View>
                                <Button
                                    // type='submit' onPress={() => this.handleSubmit()}
                                    onPress={ () => this.props.navigation.push('Register') }
                                    title="Sign Up"/>
                            </View>
                            <View
                                style={{
                                    marginTop: 45,
                                    borderBottomWidth: 0.3,
                                    borderBottomColor: 'gray',
                                }}
                                />
                            <Text style = {{fontSize:9, textAlign: 'center', color:'gray', marginTop:8}}>©Team 2 || Bootcamp Arkademy || Batch 11</Text>
                        </View>
                    </ScrollView>
            </Container>
        )
    }
}

export default LoginScreen
