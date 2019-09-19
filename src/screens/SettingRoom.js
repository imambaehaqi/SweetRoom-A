import React, { Component } from "react";
import { Container, Fab, Content, Card, CardItem, Text, Body, Icon, List, ListItem, Left, Button, Thumbnail, Right, Item, Label } from "native-base"
import { TouchableHighlight, TouchableOpacity } from "react-native";

export default class CardHeaderFooterExample extends Component {
    static navigationOptions = {
        title: 'Setting Room', 
        /* No more header config here! */
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>Active</Text>
                        </ListItem>
                        <TouchableOpacity
                            onPress = {() => this.props.navigation.push('ViewRoomAct')}>                  
                            <CardItem>
                                <Left>
                                    <Text>Room</Text>
                                </Left>
                                <Right>
                                    <Icon type="Ionicons" name="ios-arrow-forward" />
                                </Right>
                            </CardItem>
                        </TouchableOpacity>
                        <ListItem itemDivider>
                            <Text>Non-Active</Text>
                        </ListItem>                    
                        <TouchableOpacity
                            onPress = {() => this.props.navigation.push('ViewRoomNonAct')}>                  
                            <CardItem style = {{borderBottomWidth:0.3}}>
                                <Left>
                                    <Text>Room</Text>
                                </Left>
                                <Right>
                                    <Icon type="Ionicons" name="ios-arrow-forward" />
                                </Right>
                            </CardItem>
                        </TouchableOpacity>
                    </List>
                </Content>
            </Container>
        )
    }  
}