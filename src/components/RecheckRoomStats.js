import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { ListItem, Icon, Right, Body } from 'native-base'

import SwitchExample from './switch_example'

export class RecheckRoom extends Component {
    constructor() {
        super()
        this.state = {
            switch1Value: false
        }
    }

    render() {
        return (
            <View>
                <ListItem selected>
                    <Body>
                        <Text style = {{fontWeight:'bold', fontSize:20}}>Bad Room No. 13</Text>
                        <Text note numberOfLines={1} style = {{fontSize:12}}>Price: Rp. 110.000</Text>
                    </Body>
                    <Right>
                        <SwitchExample
                            toggleSwitch1 = {this.toggleSwitch1}
                            switch1Value = {this.state.switch1Value}/>
                    </Right>
                </ListItem>
            </View>
        )
    }

    toggleSwitch1 = (value) => {
        this.setState({switch1Value: value})
        console.log('Switch 1 is: ' + value)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:18}}>Room</Text>
                    <Text style = {{fontSize:12}}>Update Status Room</Text>
                </View>
            ),
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.navigate('AvailibiltyRoom')} style = {{padding:10}}>
                    <Icon name='arrow-back' />
                </TouchableOpacity>
            )
        }
    }
}

export default RecheckRoom
