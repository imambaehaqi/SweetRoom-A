import React from 'react'
import { View, Switch }

from 'react-native'

export default SwitchExample = (props) => {
   return (
      <View>
            <Switch
                onValueChange = {props.toggleSwitch1}
                value = {props.switch1Value}/>
      </View>
   )
}