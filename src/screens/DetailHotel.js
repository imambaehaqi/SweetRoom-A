import React, { Component } from "react";
import { Container, Fab, Content, Card, CardItem, Text, Body, Icon, List, ListItem, Left, Button, Thumbnail, Right, Item, Label } from "native-base"

export default class CardHeaderFooterExample extends Component {
    static navigationOptions = {
        title: 'Detail Hotel', 
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
                    <Content>
                        <Item inlineLabel
                            style = {{padding:16}}
                        >
                            <Label style = {{fontWeight:'bold'}}>List Room :</Label>
                        </Item>
                        <List>
                            <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button 
                                    onPress = {() => this.props.navigation.push('DetailRoom')}
                                    style={{ backgroundColor: '#fb8691' }} >
                                    <Text>View</Text>
                                </Button>
                            </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Content>
                <Fab
                    active={true}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#fb8691' }}
                    position="bottomRight"
                    onPress = {() => this.props.navigation.push('FormAddRoom')}>
                    <Icon name="icon" />
                </Fab>
            </Container>
        )
    }  
}