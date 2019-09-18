import React, { Component } from 'react'
import { Header, Title, Body, Container, Text, Form, Item, Label, Input, Button } from 'native-base'

import IsAuth from '../../components/IsAuth'

export class LoginScreen extends Component {
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
                <Container style = {{padding:10}}>
                    <IsAuth/>
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
                        <Button 
                            style={{ backgroundColor: '#fb8691', alignItems:'center', justifyContent:'center' }}
                            active={false}
                            onPress={ () => this.props.navigation.navigate('InitMain') }
                        >
                            <Text>LOGIN</Text>
                        </Button>
                        <Text style = {{fontWeight:'bold', textAlign:'center', padding:10, fontSize:20}}>
                            Or
                        </Text>
                        <Button 
                            style={{ backgroundColor: '#fb8691', alignItems:'center', justifyContent:'center' }}
                            onPress={ () => this.props.navigation.push('Register') }
                        >
                            <Text>REGISTER</Text>
                        </Button>
                    </Container>
                    <Text style = {{textAlign:'center', color:'gray', fontSize:9}}>©Team 2 || Bootcamp Arkademy || Batch 11</Text>
                </Container>
            </Container>
        )
    }
}

export default LoginScreen
