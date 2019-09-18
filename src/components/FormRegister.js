import React, { Component } from "react";
import { Container, Button, Form, Item, Input, Text } from "native-base"

export default class FormExample extends Component {
    render() {
        return (
            <Container>
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
        );
    }
}