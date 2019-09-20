import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { 
    Icon, 
    Form, 
    Item, 
    Input, 
    Label, 
    Button, 
    Text,
    View } from 'native-base'

import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'

export default class Profile extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:18}}>Edit Profile</Text>
                </View>
            ),
            headerLeft: (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Setting')} style = {{padding:10}}>
                    <Icon name='arrow-back' />
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Setting')} style = {{padding:10}}>
                    <Button disabled bordered>
                        <Text>SAVE</Text>
                    </Button>
                </TouchableOpacity>
            )
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            profileData: [],
        }
    }
    
    componentDidMount = async () => {
        await AsyncStorage.getItem('token')
            .then(
                (result) => {
                    !result ? 
                        this.props.navigation.navigate('Login') : ''
                }
            )
        await AsyncStorage.getItem('token')
            .then( result => {
                Axios.get('http://192.168.100.36:1010/user/profile', {
                    headers: {
                        sweet_token: result
                    }
                })
            })
            .catch( err => console.warn(err))
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <View style={styles.body}>
                <Form>
                    <Item stackedLabel>
                        <Label>First Name</Label>
                        <Input placeholder = "BANGSAT"/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Last Name</Label>
                        <Input placeholder = "BANGSAT"/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Phone</Label>
                        <Input placeholder = "BANGSAT"/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input placeholder = "BANGSAT"/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Birthday</Label>
                        <Input placeholder = "BANGSAT"/>
                    </Item>
                </Form> 
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#fb8691",
        height:200
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
    },
    name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600'
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        padding:30
    },
    name:{
        fontSize:28,
        fontWeight: "600"
    },
    info:{
        fontSize:16,
        color: "#fb8691",
        marginTop:10
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:200,
        borderRadius:30,
        backgroundColor: "#fb8691"
    }
})