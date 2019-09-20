import React, { Component } from 'react'
import { Container, Right, Left, Content, List, Thumbnail, Text, Body, Header, Title, Icon, CardItem, ListItem } from 'native-base'
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
                    <ListItem thumbnail
                        onPress = {() => this.props.navigation.push('SettingRoom')}>
                        <Left>
                            <Thumbnail square source={{ uri: 'https://image.freepik.com/free-vector/illustration-gears_53876-28521.jpg' }} />
                        </Left>
                        <Body>
                            <Text style = {{fontWeight:'bold'}}>Setting Room</Text>
                            <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Icon type="Ionicons" name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail
                        onPress = {() => this.props.navigation.push('AvailibiltyRoom')}>
                        <Left>
                            <Thumbnail square source={{ uri: 'https://image.freepik.com/free-vector/characters-people-holding-time-management-concept_53876-32619.jpg' }} />
                        </Left>
                        <Body>
                            <Text style = {{fontWeight:'bold'}}>Availibility Room</Text>
                            <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Icon type="Ionicons" name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

export default MenuScreen
