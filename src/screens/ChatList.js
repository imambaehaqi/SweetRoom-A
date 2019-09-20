import React, { Component } from 'react'
import { Text, 
    Container, 
    Body, 
    Header, 
    Title, 
    Right, 
    CardItem, 
    Content } from 'native-base'
import { TouchableOpacity } from 'react-native'

export class OrderScreen extends Component {
    state = {
        curTime: null,
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
            curTime : new Date().toLocaleString()
            })
        }, 1000)
    }

    render() {
        return (
            <Container>
                <Header style = {{backgroundColor:'white'}}>
                    <Body>
                        <Title>
                            <Text style = {{fontWeight:'bold'}}>
                                CHAT LIST
                            </Text>
                        </Title>
                    </Body>
                </Header>
                <Content>
                    <TouchableOpacity onPress = {() => this.props.navigation.push('ChatScreen')}>
                        <CardItem 
                            style = {{borderBottomWidth:0.3}}>
                            <Body>
                                <Text>User Order{}</Text>
                                <Text note numberOfLines={1}>Rp. {}, Room Number{}</Text>
                            </Body>
                            <Right>
                                <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
                                <Text style={{fontSize:11, color:'grey'}}>online : offline{}</Text>
                            </Right>
                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem >
                            <Body>
                                <Text>User Order{}</Text>
                                <Text note numberOfLines={1}>Rp. {}, Room Number{}</Text>
                            </Body>
                            <Right>
                                <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
                                <Text style={{fontSize:11, color:'grey'}}>online : offline{}</Text>
                            </Right>
                        </CardItem>
                    </TouchableOpacity>
                </Content>
            </Container>
        )
    }
}

export default OrderScreen
