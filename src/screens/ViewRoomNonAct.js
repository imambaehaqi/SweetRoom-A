import React, { Component } from "react"
import { 
    Container, 
    Content, 
    CardItem, 
    Text, 
    Body, 
    Icon, 
    ListItem, 
    Left, 
    Button, 
    Thumbnail, 
    Right, 
    List } from "native-base"
import { TouchableOpacity, View } from 'react-native'

export default class CardHeaderFooterExample extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:18}}>Room</Text>
                    <Text style = {{fontSize:12}}>ViewRoom</Text>
                </View>
            ),
            headerLeft: (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('SettingRoom')} style = {{padding:10}}>
                    <Icon name='arrow-back' />
                </TouchableOpacity>
            )
        }
    }
    
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>Active</Text>
                        </ListItem>  
                        <TouchableOpacity 
                            onPress = {() => this.props.navigation.push('EditRoom')}>
                            <CardItem thumbnail
                                style = {{borderBottomWidth:0.3}}>
                                <Left>
                                    <Thumbnail square source={{ uri: 'Image URL' }} />
                                </Left>
                                <Body>
                                    <Text>Bad Room No. 13</Text>
                                    <Text note numberOfLines={2}>Price: Rp. 110.000</Text>
                                </Body>
                                <Right>
                                    <Icon type="Ionicons" name="ios-arrow-forward" />
                                </Right>
                            </CardItem>
                        </TouchableOpacity>
                    </List>
                </Content>
                <Button block danger
                    onPress = {() => this.props.navigation.push('FormRoom')}>
                    <Text>Add Room</Text>
                </Button>
            </Container>
        )
    }  
}