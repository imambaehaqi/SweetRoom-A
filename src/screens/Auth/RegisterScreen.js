import React, { Component } from 'react'
import { Container, Text, Header, Title, Body, Form, Item, Input, Button } from 'native-base'

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
                    <Form>
                        <Item>
                            <Input placeholder="Full Name" />
                        </Item>
                        <Item>
                            <Input placeholder="Name Country" />
                        </Item>
                        <Item>
                            <Input placeholder="Location" />
                        </Item>
                        <Item>
                            <Input placeholder="Email Address" />
                        </Item>
                        <Item>
                            <Input placeholder="Password" />
                        </Item>
                        <Container style = {{paddingTop:20}}>
                            <Button block danger
                                onPress={ () => this.props.navigation.navigate('Auth') }
                            >
                                <Text>REGISTER</Text>
                            </Button>
                        </Container>
                    </Form>
                </Container>
            </Container>
        )
    }
}

export default RegisterScreen
