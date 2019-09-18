import React, { Component } from 'react'
import { Container, Fab, Icon, View, List, Thumbnail, Text, ListItem, Body, Header, Title } from 'native-base'
import { TouchableOpacity } from 'react-native'

export class MenuScreen extends Component {
    render() {
        return (
            <Container>
                <Header style = {{backgroundColor:'white'}}>
                    <Body>
                        <Title>
                            <Text style = {{fontWeight:'bold'}}>
                                Menu
                            </Text>
                        </Title>
                    </Body>
                </Header>
                <View style={{ flex: 1 }}>
                    <List>
                        <ListItem>
                            <TouchableOpacity onPress={() => this.props.navigation.push('DetailHotel')}>
                                <Thumbnail square size={100} source={require('../../assets/img/img-partner.png')} />
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </TouchableOpacity>
                        </ListItem>
                    </List>
                    <Fab
                        active={true}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#fb8691' }}
                        position="bottomRight"
                        onPress={() => this.props.navigation.push('FormAddHotel')}>
                        <Icon name="icon" />
                    </Fab>
                </View>
            </Container>
        )
    }
}

export default MenuScreen
