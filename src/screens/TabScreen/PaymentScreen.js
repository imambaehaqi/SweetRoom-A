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
    Left,
    Thumbnail } from "native-base"

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
                            <Thumbnail square source={{ uri: 'https://image.freepik.com/free-vector/money-bag_16734-108.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Rp. {}</Text>
                            <Text note numberOfLines={1} style={{fontSize:12}}>ORDER TICKET {}</Text>
                            <Text note numberOfLines={1} style={{fontSize:10}}>Price Rp. {}| Commission{}</Text>
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