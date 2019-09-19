import React, { Component } from "react";
import { Container, Fab, Content, Card, CardItem, Text, Body, Icon, List, ListItem, Left, Button, Thumbnail, Right } from "native-base"

export default class CardHeaderFooterExample extends Component {
    static navigationOptions = {
        title: 'Edit Hotel', 
        /* No more header config here! */
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>A</Text>
                        </ListItem>                    
                        <ListItem>
                            <Text>Aaron Bennet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Ali Connors</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>B</Text>
                        </ListItem>  
                        <ListItem>
                            <Text>Bradley Horowitz</Text>
                        </ListItem>
                    </List>
                </Content>
                <Button block danger>
                    <Text>Add Hotel</Text>
                </Button>
            </Container>
        )
    }  
}