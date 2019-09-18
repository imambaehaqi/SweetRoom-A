import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Title } from "native-base"

export default class CardHeaderFooterExample extends Component {
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
                </Header>
            <Content>
                <Card>
                    <CardItem header>
                        <Text>NativeBase</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Text>GeekyAnts</Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
}