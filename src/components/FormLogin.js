import React, { Component } from 'react'
import { Container, Button, Content, Item, Label, Form, Input, Text } from 'native-base'

export class FormLogin extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Item floatingLabel>
                        <Label>Email Address</Label>
                    <Input />
                    </Item>
                        <Item floatingLabel>
                        <Label>Password</Label>
                    <Input />
                    </Item>
                </Form>
                <Container style = {{paddingTop:20}} >
                    <Button block danger
                        onPress={ () => this.props.navigation.navigate('InitMain') }
                    >
                        <Text>LOGIN</Text>
                    </Button>
                    <Text style = {{fontWeight:'bold', textAlign:'center', padding:10, fontSize:20}}>
                        Or
                    </Text>
                    <Button block danger
                        onPress={ () => this.props.navigation.push('Register') }
                    >
                        <Text>REGISTER</Text>
                    </Button>
                </Container>
                <Text style = {{textAlign:'center', color:'gray', fontSize:9}}>©Team 2 || Bootcamp Arkademy || Batch 11</Text>
            </Container>
        )
    }
}

export default FormLogin
