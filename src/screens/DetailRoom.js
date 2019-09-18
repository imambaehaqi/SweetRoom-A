import React, { Component } from "react";
import { Container, Fab, Content, Card, CardItem, Text, Body, Icon, List, ListItem, Left, Button, Thumbnail, Right } from "native-base"

export default class CardHeaderFooterExample extends Component {
    static navigationOptions = {
        title: 'Detail Room', 
        /* No more header config here! */
    }

    render() {
        return (
            <Container>
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
                <Fab
                    active={true}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#fb8691' }}
                    position="bottomRight"
                    onPress = {() => this.props.navigation.push('DetailRoom')}>
                    <Icon name="icon" />
                </Fab>
            </Container>
        )
    }  
}