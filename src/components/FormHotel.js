import React, { Component } from "react"
import { Container, Body, Form, Item, Input, Label, Header, Text, Title, Right, Button, Content } from "native-base"

import { ScrollView } from 'react-native'

export default class FormExample extends Component {
    render() {
        return (
            <Container >
                <Header style = {{backgroundColor:'white'}}>
                    <Body>
                        <Title>
                            <Text style = {{fontWeight:'bold'}}>
                                YOUR HOTEL
                            </Text>
                        </Title>
                    </Body>
                    <Right>
                        <Button bordered danger
                            onPress = { () => this.props.navigation.navigate('InitMain')}
                        >
                            <Text>SAVE</Text>
                        </Button>
                    </Right>
                </Header>
                <Container style = {{padding:20}}>
                    <ScrollView>
                        <Text style = {{fontWeight:'bold', fontSize:24}}>Please Completed for Your Hotel!</Text>
                        <Form>
                            <Item stackedLabel>
                                <Label>Hotel Name</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>City</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Address</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Zip Code</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Lattitude</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Longtitude</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Phone</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Image URL</Label>
                                <Input />
                            </Item>
                        </Form>
                    </ScrollView>
                </Container>
            </Container>
        )
    }
}