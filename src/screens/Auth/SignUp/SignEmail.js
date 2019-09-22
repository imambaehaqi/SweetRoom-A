/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { View, Icon, Input, Label, Item } from 'native-base'
import Axios from 'axios'
import {URL} from '../../configs'

class SignEmailScreen extends Component{
    constructor(props) {
        super(props)
        this.state = {
            send: false,
            emailInvalid: false,
            form: props.navigation.getParam('form'),
            emailList: [],
        }
    }

    componentDidMount = () =>{
        Axios.get(`${URL}/user/allemail/a/`)
            .then( (res) => {
                this.setState({ emailList: res.data.data})
            } )
    }

    emailRegex = (email) => {
        //One or more after '@' and minimum domain 2 character
        let emailRegex = /^[\d\w\._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }

    handleEmail = (type, value) => {
        let newFormData = {...this.state.form}
        newFormData[type] = value
        // if ( this.state.emailList.includes(value) ) {
        //     console.warn('email ada coi')
        // }
        // else 
        if (this.emailRegex(newFormData.email)) {
            this.setState({
                form: newFormData,
                send: true
            })
        }
        if ( !this.emailRegex(newFormData.email) ) { this.setState({ send: false })}
    }

    render() {
        return(
            <View style={styles.viewStyles}>
                <TouchableOpacity onPress={ () => this.props.navigation.goBack(null)}>
                    <Icon type='Ionicons' name='md-arrow-round-back' style={{ color: '#f9f9f9' , fontSize: 30}} />
                </TouchableOpacity>
                <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#f9f9f9', marginTop: 10, marginBottom: 30 }} >And, your email?</Text>
                <Item stackedLabel>
                    <Label style={{fontSize: 12, color: '#f9f9f9'}}>EMAIL</Label>
                    <Input style={{color: '#f9f9f9'}} onChangeText={ value => this.handleEmail('email', value) } />
                </Item>
                {this.state.send ?
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Password', { form: this.state.form })} style={{width: 50, height: 50, justifyContent: "center", alignItems: 'center', backgroundColor: '#f9f9f9', borderRadius: 40, position: 'absolute', right: 15, bottom: 30}}>
                        <Icon type='Ionicons' name='ios-arrow-forward' style={{ color: '#fb8691'}} />
                    </TouchableOpacity>
                    :
                    <View style={{width: 50, height: 50, justifyContent: "center", alignItems: 'center', backgroundColor: '#f9f9f950', borderRadius: 40, position: 'absolute', right: 15, bottom: 30}} >
                        <Icon type='Ionicons' name='ios-arrow-forward' style={{ color: '#fb8691'}} />
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        backgroundColor: '#fb8691',
        fontFamily: 'AirbnbCerealMedium',
        paddingLeft: 15,
        paddingTop: 15,
        paddingRight: 15
    },
})

export default SignEmailScreen