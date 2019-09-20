import React, { Component } from 'react'
import { Container, Text, Form, Item, Input, Button, Label } from 'native-base'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { ScrollView, View } from 'react-native'

export class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'REGISTER',
    }
    
    constructor(props){
        super(props)
        this.state = {
            form: {}
        }
    }

    handleForm = (type, value) => {
        let newFormData = {...this.state.form}
        newFormData[type] = value
        if ( value.length > 1 ) {
            this.setState({
                form: newFormData
            })
        }
    }

    handleSubmit = () => {
        Axios.post('http://192.168.100.36:1010/user/mitra/', this.state.form)
            .then( async (res) => {
                await AsyncStorage.setItem('token', res.data.accessToken)
                this.props.navigation.navigate('InitMain')
                console.warn(res.data)
            })
            .catch(err => console.warn(err))
    }

    render() {
        return (
            <Container >
                <ScrollView style = {{padding:20}}>
                    <Text style = {{fontWeight:'bold', fontSize:24}}>Welcome to SweetRoom Partner</Text>
                    <Form>
                        <Item stackedLabel >
                            <Label style = {{color:'gray'}}>First Name</Label>
                            <Input onChangeText={ value => this.handleForm('first_name', value) }/>
                        </Item>
                        <Item stackedLabel>
                            <Label style = {{color:'gray'}}>Last Name</Label>
                            <Input onChangeText={ value => this.handleForm('last_name', value) }/>
                        </Item>
                        <Item stackedLabel>
                            <Label style = {{color:'gray'}}>Email</Label>
                            <Input onChangeText={ value => this.handleForm('email', value) }/>
                        </Item>
                        <Item stackedLabel>
                            <Label style = {{color:'gray'}}>Password</Label>
                            <Input onChangeText={ value => this.handleForm('password', value) }/>
                        </Item>
                        <Item stackedLabel>
                            <Label style = {{color:'gray'}}>Birthday</Label>
                            <Input onChangeText={ value => this.handleForm('birth', value) }/>
                        </Item>
                        <View style = {{paddingTop:20}}>
                            <Button
                                style={{ backgroundColor: '#fb8691', alignItems:'center', justifyContent:'center' }}
                                onPress={ () => this.handleSubmit()}>
                                <Text>REGISTER</Text>
                            </Button>
                        </View>
                    </Form>
                </ScrollView>
            </Container>
        )
    }
}

export default RegisterScreen
