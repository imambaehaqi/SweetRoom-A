import React, { Component } from "react"
import { Container, 
    Label, 
    Form, 
    Item, 
    Input, 
    Icon,
    Button, 
    Text } from "native-base"
import { TouchableOpacity } from 'react-native'

export default class FormExample extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Edit Room',
            headerLeft: (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('ViewRoomAct')} style = {{padding:10}}>
                    <Icon name='arrow-back' />
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('ViewRoomAct')} style = {{padding:10}}>
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
                            <Label>Bad Type</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Image URL</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Number Room</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Price</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Status</Label>
                            <Input />
                        </Item>
                    </Form>
            </Container>
        )
    }
}