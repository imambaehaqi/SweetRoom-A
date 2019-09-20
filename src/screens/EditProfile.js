import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import { Icon } from 'native-base'

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
            )
        }
    }

    render() {
        return (
        <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.info}>UX Designer / Mobile developer</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style = {{color:'white'}}>Edit</Text>  
                    </TouchableOpacity>              
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style = {{color:'white'}}>Save</Text> 
                    </TouchableOpacity>
                    </View>
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
            flex: 1,
            alignItems: 'center',
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
            width:250,
            borderRadius:30,
            backgroundColor: "#fb8691"
        }
    })