import React, { Component } from 'react'
import { Container, Tabs, Tab, Fab, Icon, View, List, Thumbnail, Text, ListItem } from 'native-base'
import { TouchableOpacity } from 'react-native'

export class MenuScreen extends Component {
    render() {
        return (
                <Tabs>
                    <Tab heading='Adding Hotel'>
                        <Container>
                            <View style={{ flex: 1 }}>
                                <List>
                                    <ListItem>
                                        <TouchableOpacity onPress={() => this.props.navigation.push('Detail')}>
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
                                    style={{ backgroundColor: '#5067FF' }}
                                    position="bottomRight"
                                    onPress={() => this.props.navigation.push('FormAddHotel')}>
                                    <Icon name="icon" />
                                </Fab>
                            </View>
                        </Container>
                    </Tab>
                    <Tab heading='Tab 2'>
                        {/* <Tab2 /> */}
                    </Tab>
                    <Tab heading='Tab 3'>
                        {/* <Tab3 /> */}
                    </Tab>
                </Tabs>
        )
    }
}

export default MenuScreen
