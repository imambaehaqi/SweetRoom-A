import React, { Component } from 'react'
import { Header, Title, Body, Container, Text, Form, Item, Label, Input, Button } from 'native-base'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import IsAuth from '../../components/IsAuth'
import { View, ScrollView } from 'react-native'

export class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {},
            send: false
        }
    }

    handleForm = (type, value) => {
        let newFormData = {...this.state.form}
        newFormData[type] = value
        if ( value.length > 1 ) {
            this.setState({
                form: newFormData,
            })
            if ( type == 'password') {
                this.setState({
                    send: true
                })
            }
        }
        if ( value.length < 1 ) { this.setState({ send: false })}
    }

    submitForm = () => {
        Axios.post('http://192.168.100.36:1010/user/login/', this.state.form)
            .then( async (res) => {
                console.warn(res)
                if (res.data.status === 200){
                    await AsyncStorage.setItem('token', res.data.accessToken)
                    this.props.navigation.navigate('InitMain')
                } else if (res.data.status === 402){
                    console.warn('Wrong Password')
                } else if (res.data.status === 401){
                    console.warn('User Not Found')
                }
            })
            .catch(err => console.warn(err))
    }
    
    render() {
        return (
            <Container>
                <Header style = {{backgroundColor:'white'}}>
                    <Body>
                        <Title>
                            <Text style = {{fontWeight:'bold'}}>
                                PARTNER
                            </Text>
                        </Title>
                    </Body>
                </Header>
                <ScrollView>
                    <View style = {{padding:5}}>
                        <IsAuth/>
                        <Form>
                            <Item stackedLabel>
                                <Label style = {{color:'gray'}}>Email Address</Label>
                                <Input onChangeText={ value => this.handleForm('email', value) }/>
                            </Item>
                            <Item stackedLabel>
                                <Label style = {{color:'gray'}}>Password</Label>
                                <Input onChangeText={ value => this.handleForm('password', value) }/>
                            </Item>
                        </Form>
                        <View style = {{paddingTop:20}} >
                            <Button 
                                style={{ backgroundColor: '#fb8691', alignItems:'center', justifyContent:'center' }}
                                active={false}
                                onPress={ () => this.submitForm()}
                                // onPress = {() => this.props.navigation.navigate('InitMain')}
                            >
                                <Text>LOGIN</Text>
                            </Button>
                            <Text style = {{fontWeight:'bold', textAlign:'center', padding:7, fontSize:14, color:'gray'}}>Or</Text>
                            <Button 
                                style={{ backgroundColor: '#fb8691', alignItems:'center', justifyContent:'center' }}
                                onPress={ () => this.props.navigation.push('Register') }
                            >
                                <Text>REGISTER</Text>
                            </Button>
                            <Text style = {{textAlign:'center', color:'gray', fontSize:9, paddingTop:10}}>©Team 2 || Bootcamp Arkademy || Batch 11</Text>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

export default LoginScreen
