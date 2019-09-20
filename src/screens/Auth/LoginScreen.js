import React, { Component } from 'react'
import { Header, 
    Title, 
    Body, 
    Container, 
    Text, 
    Form, 
    Item, 
    Label, 
    Input, 
    Button, 
    Toast} from 'native-base'
import Axios from 'axios'
import { View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import firebase from 'firebase'

import IsAuth from '../../components/IsAuth'

export class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {},
            send: false,
            errorMitra: false,
            errorUserNotFound: false,
            errorWrongPass: false,
            showToast: false
        }
    }

    emailRegex = (email) => {
        //One or more after '@' and minimum domain 2 character
        let emailRegex = /^[\d\w\._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }

    handleForm = (type, value) => {
        this.setState({
            errorMitra: false,
            errorUserNotFound: false,
            errorWrongPass: false,
        })
        let newFormData = {...this.state.form}
        newFormData[type] = value
        let pass = newFormData.password || 0
        if ( this.emailRegex(newFormData.email ) || pass.length > 0 ) {
            this.setState({
                form: newFormData,
            })
            if ( this.emailRegex (newFormData.email) && pass.length > 0) {
                this.setState({
                    send: true
                })
            }
        }
        if ( !this.emailRegex(newFormData.email) || pass.length < 1) { this.setState({ send: false })}
    }

    submitForm = () => {
        Axios.post('http://192.168.100.36:1010/user/login/', this.state.form)
        .then( async (res) => {
            if (res.data.status === 200 && res.data.result[0].level == 'mitra' ) {
                await AsyncStorage.setItem('token', res.data.accessToken)
                await AsyncStorage.setItem('dataUser', JSON.stringify(res.data.result[0]))
                firebase.database().ref('users/'+ res.data.result[0].id).set(
                    res.data.result[0]
                )
                this.props.navigation.navigate('InitMain')
            } else if (res.data.status === 200 && res.data.result[0].level == 'user') {
                this.setState({ errorMitra: true })
            } else if (res.data.status === 402) {
                this.setState({ errorWrongPass: true })
            } else if (res.data.status === 401) {
                this.setState({ errorUserNotFound: true })
            }
        })
        .catch(err => console.warn(err))
        Toast.show({
            text: "Wrong password!",
            buttonText: "Okay",
            position: "top"
        })
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
                                <Input 
                                    secureTextEntry={true}
                                    onChangeText={ value => this.handleForm('password', value) }/>
                            </Item>
                        </Form>
                        <View style = {{paddingTop:20}} >
                            <Button 
                                style={{ backgroundColor: '#fb8691', alignItems:'center', justifyContent:'center' }}
                                active={false}
                                onPress={ () => this.submitForm()} >
                                <Text>LOGIN</Text>
                            </Button>
                            <Text style = {{fontWeight:'bold', textAlign:'center', padding:7, fontSize:14, color:'gray'}}>Or</Text>
                            <Button 
                                style={{ backgroundColor: '#fb8691', alignItems:'center', justifyContent:'center' }}
                                onPress={ () => this.props.navigation.push('Register') }>
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
