import React, { Component } from 'react'
import { Tabs, Tab, Text, ListItem, Container, Body, Header, Title, Right } from 'native-base'

export class OrderScreen extends Component {
    state = {
        curTime: null,
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
            curTime : new Date().toLocaleString()
            })
        },1000)
    }

    render() {
        return (
            <Container>
                <Header style = {{backgroundColor:'white'}}>
                    <Body>
                        <Title>
                            <Text style = {{fontWeight:'bold'}}>
                                Sweet Room
                            </Text>
                        </Title>
                    </Body>
                </Header>
                <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}}>
                    <Tab 
                        heading="In Progess" 
                        tabStyle={{backgroundColor: 'white'}} 
                        textStyle={{color: 'black'}} 
                        activeTabStyle={{backgroundColor: 'white'}} 
                        activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
                        <ListItem >
                        <Body>
                            <Text>User Order{}</Text>
                            <Text note numberOfLines={1}>Rp. {}, Room Number{}</Text>
                        </Body>
                        <Right>
                            <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
                        </Right>
                        </ListItem>
                        <ListItem >
                            <Body>
                                <Text>User Order{}</Text>
                                <Text note numberOfLines={1}>Rp. {}, Room Number{}</Text>
                            </Body>
                            <Right>
                                <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
                            </Right>
                        </ListItem>
                    </Tab>
                    <Tab 
                        heading="Completed" 
                        tabStyle={{backgroundColor: 'white'}} 
                        textStyle={{color: 'black'}} 
                        activeTabStyle={{backgroundColor: 'white'}} 
                        activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
                        <ListItem>
                        <Body>
                            <Text>User Order{}</Text>
                            <Text note numberOfLines={1}>Rp. {}, Room Number{}</Text>
                        </Body>
                        <Right>
                            <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
                            <Text style={{fontSize:12}}>Status{}</Text>
                        </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>User Order{}</Text>
                                <Text note numberOfLines={1}>Rp. {}, Room Number{}</Text>
                            </Body>
                            <Right>
                                <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
                                <Text style={{fontSize:12}}>Status{}</Text>
                            </Right>
                        </ListItem>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default OrderScreen
