import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

export class FormLogin extends Component {
    render() {
        return (
            <View>
                <TextInput
                    style={{borderBottomWidth: 0.3}}
                    placeholder="Email"
                    keyboardType='email-address'
                    // onChangeText={(text) => this.handleChange( 'email', text )}
                />
                <TextInput
                    secureTextEntry = {true}
                    style={{borderBottomWidth: 0.3}}
                    placeholder="Password"
                    // onChangeText={(text) => this.handleChange( 'password', text )}
                />
                <View style={{paddingTop:10}}>
                    <View>
                        <Button
                            // type='submit' onPress={() => this.handleSubmit()}
                            onPress={ () => this.props.navigation.navigate('InitMain') }
                            title="Sign In"/>
                    </View>
                </View>
            </View>
        )
    }
}

export default FormLogin
