import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Text, Body, Title, Left } from "native-base"
import { GiftedChat } from 'react-native-gifted-chat'

export class ChatScreen extends Component {
    static navigationOptions = {
        title: 'CHAT'
    }

    render() {
        return (
            <Container>
                <Header style = {{backgroundColor:'white'}}>
                    <Body>
                        <Title>
                            <Text style = {{fontWeight:'bold', fontSize:18}}>User Name Order</Text>
                        </Title>
                    </Body>
                    <Left>
                        <Text style = {{fontSize:12}}>online : offline</Text>
                    </Left>
                </Header>
                <Content>
                    <GiftedChat
                        // text={this.state.message}
                        // onInputTextChanged={(val)=>{this.setState({message: val})}}
                        // messages={this.state.messageList}
                        // onSend={() => this.send()}
                        // user={{_id : User.uid}}
                    />
                </Content>
            </Container>
        )
    }
}

export default ChatScreen
