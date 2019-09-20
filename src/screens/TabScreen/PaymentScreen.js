import React, { Component } from "react"
import { Container, 
    Header, 
    Content, 
    Right, 
    Button, 
    Text, 
    Body, 
    Title, 
    Icon, 
    ListItem, 
    Left } from "native-base"

export default class CardHeaderFooterExample extends Component {
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
                                Payment
                            </Text>
                        </Title>
                    </Body>
                    <Right>
                        <Button bordered danger>
                            <Text>VIEW CODE</Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={{paddingTop:10}}>
                    <ListItem thumbnail>
                        <Left>
                            <Icon type="MaterialCommunityIcons" name="cash-marker"/>
                        </Left>
                        <Body>
                            <Text>Rp. {}</Text>
                            <Text note numberOfLines={1}>ORDER TICKET {}</Text>
                            <Text note numberOfLines={1}>Price Rp. {}| Commission{}</Text>
                        </Body>
                        <Right>
                            <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Icon type="MaterialCommunityIcons" name="cash"/>
                        </Left>
                        <Body>
                            <Text>Rp. {}</Text>
                            <Text note numberOfLines={1}>ORDER TICKET {}</Text>
                            <Text note numberOfLines={1}>Price Rp. {}| Commission{}</Text>
                        </Body>
                        <Right>
                            <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}