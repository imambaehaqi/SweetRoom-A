import React, { Component } from 'react'
import { Tabs, Tab, Text, TabHeading, Container, Body, Header, Title } from 'native-base'

export class OrderScreen extends Component {
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
                        <Text>tes</Text>
                    </Tab>
                    <Tab 
                        heading="Completed" 
                        tabStyle={{backgroundColor: 'white'}} 
                        textStyle={{color: 'black'}} 
                        activeTabStyle={{backgroundColor: 'white'}} 
                        activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
                        <Text>tes2</Text>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default OrderScreen
