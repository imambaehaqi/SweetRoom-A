import React, { Component } from "react"
import { Container, 
    Button, 
    Text, 
    Form, 
    Item, 
    Input, 
    Label, 
    Icon } from "native-base"
import { TouchableOpacity } from 'react-native'

export default class FormExample extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Edit Hotel',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.navigate('Setting')} style = {{padding:10}}>
                    <Icon name='arrow-back' />
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Setting')} style = {{padding:10}}>
                    <Button disabled bordered>
                        <Text>SAVE</Text>
                    </Button>
                </TouchableOpacity>
            ),
        }
    }

    render() {
        return (
            <Container style = {{padding:10}}>
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
            </Container>
        )
    }
}