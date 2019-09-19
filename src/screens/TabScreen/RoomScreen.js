import React, { Component } from 'react'
import { Container, Right, Left, Content, List, Thumbnail, Text, Body, Header, Title, Icon, CardItem } from 'native-base'
import { TouchableOpacity } from 'react-native'

export class MenuScreen extends Component {
    render() {
        return (
            <Container>
                <Header style = {{backgroundColor:'white'}}>
                    <Body>
                        <Title>
                            <Text style = {{fontWeight:'bold'}}>
                                Room
                            </Text>
                        </Title>
                    </Body>
                </Header>
                <Content style={{paddingTop:10}}>
                    <List>
                        <TouchableOpacity 
                            onPress = {() => this.props.navigation.push('SettingRoom')}>
                            <CardItem thumbnail
                                style = {{borderBottomWidth:0.3}}
                            >
                                <Left>
                                    <Thumbnail square source={{ uri: 'Image URL' }} />
                                </Left>
                                <Body>
                                    <Text style = {{fontWeight:'bold'}}>Setting Room</Text>
                                    <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                                </Body>
                                <Right>
                                    <Icon type="Ionicons" name="ios-arrow-forward" />
                                </Right>
                            </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress = {() => this.props.navigation.push('AvailibiltyRoom')}>
                            <CardItem thumbnail
                                style = {{borderBottomWidth:0.3}}
                            >
                                <Left>
                                    <Thumbnail square source={{ uri: 'Image URL' }} />
                                </Left>
                                <Body>
                                    <Text style = {{fontWeight:'bold'}}>Availibility Room</Text>
                                    <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                                </Body>
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
