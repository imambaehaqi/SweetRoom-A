import React, { Component } from 'react'
import { Container, Right, Left, Content, List, Thumbnail, Text, ListItem, Body, Header, Title, Button, Icon, CardItem } from 'native-base'
import { TouchableOpacity } from 'react-native'

export class MenuScreen extends Component {
    static navigationOptions = {
        title: 'Availibilty Room', 
        /* No more header config here! */
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <TouchableOpacity onPress = {() => this.props.navigation.push('SettingRoom')}>
                            <CardItem thumbnail>
                                <Body>
                                    <Text>List Room Not Availibilty</Text>
                                    <Text note numberOfLines={3}>Here you can find out the available rooms and update their status when the room is available again</Text>
                                </Body>
                                <Right>
                                    <Icon type="Ionicons" name="ios-arrow-forward" />
                                </Right>
                            </CardItem>
                        </TouchableOpacity>
                        <ListItem itemDivider>
                            <Text>Active Room</Text>
                        </ListItem>
                        <TouchableOpacity onPress = {() => this.props.navigation.push('RecheckRoom')}>                    
                            <CardItem>
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

export default MenuScreen
