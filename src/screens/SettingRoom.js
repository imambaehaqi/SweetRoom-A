import React, { Component } from "react"
import { Container, 
    Content, 
    CardItem, 
    Text, 
    Icon, 
    List, 
    ListItem, 
    Left, 
    Right } from "native-base"
import { TouchableOpacity } from "react-native"

export default class CardHeaderFooterExample extends Component {
    static navigationOptions = {
        title: 'Setting Room'
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