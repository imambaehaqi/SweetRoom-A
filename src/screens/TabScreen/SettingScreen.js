import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, 
    Header, 
    Content, 
    Card, 
    CardItem, 
    Text, 
    Body, 
    Title, 
    Left, 
    Right, 
    Icon, 
    ListItem, List } from "native-base"
import AsyncStorage from '@react-native-community/async-storage'

import SwitchExample from '../../components/switch_example'

export class SettingScreen extends Component {
    logOut = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('InitAuth')
    }

    constructor() {
        super()
        this.state = {
            switch1Value: false
        }
    }

    toggleSwitch1 = (value) => {
        this.setState({switch1Value: value})
        console.log('Switch 1 is: ' + value)
    }
    
    render() {
        return (
            <Container>
                <Header style = {{backgroundColor:'white'}}>
                    <Body>
                        <Title>
                            <Text style = {{fontWeight:'bold'}}>
                                Setting
                            </Text>
                        </Title>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <TouchableOpacity onPress = {() => this.props.navigation.push('EditHotel')}>
                            <CardItem header>
                                <Text style = {{fontWeight:'bold'}}>HOTEL ASEP JAYA</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>+62 81235050427</Text>
                                </Body>
                                <Right>
                                    <Icon type="Ionicons" name="ios-arrow-forward" />
                                </Right>
                            </CardItem>
                            <CardItem footer>
                                <Text style = {{color:'grey'}}>iambaehaqi@gmail.com</Text>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Icon type="MaterialCommunityIcons" name="home-city-outline"/>
                            </Left>
                            <Body>
                                <Text style = {{fontWeight:'bold', fontSize:16}}>Open Reservation</Text>
                            </Body>
                            <Right>
                                <SwitchExample
                                    toggleSwitch1 = {this.toggleSwitch1}
                                    switch1Value = {this.state.switch1Value}/>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail
                            onPress={ () => this.props.navigation.push('FormHotel') }>
                            <Left>
                                <Icon type="FontAwesome5" name="hotel"/>
                            </Left>
                            <Body>
                                <Text style = {{fontWeight:'bold', fontSize:16}}>Add Hotel</Text>
                            </Body>
                            <Right>
                                <Icon type="Ionicons" name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Icon type="FontAwesome" name="qrcode"/>
                            </Left>
                            <Body>
                                <Text style = {{fontWeight:'bold', fontSize:16}}>View Code</Text>
                            </Body>
                            <Right>
                                <Icon type="Ionicons" name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                    <Text style = {{paddingTop:10, textAlign:'center', color:'gray', fontSize:11}}>
                        Version No. SWEETROOM Stagging v1.0.0
                    </Text>
                    <TouchableOpacity onPress={() => this.logOut()}>
                        <Text style = {{textAlign:'center', paddingTop:25, color:'tomato', fontWeight:'bold'}}>LOGOUT</Text>
                    </TouchableOpacity>
                </Content>
            </Container>
        )
    }
}

export default SettingScreen
