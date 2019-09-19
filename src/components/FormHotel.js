import React, { Component } from "react"
import { Container, Fab, Form, Item, Input, Label, Icon } from "native-base"

export default class FormExample extends Component {
    static navigationOptions = {
        title: 'Add New Hotel'   
        /* No more header config here! */
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