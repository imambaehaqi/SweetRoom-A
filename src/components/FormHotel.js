import React, { Component } from "react"
import { Container, 
  Body, 
  Form, 
  Item, 
  Input, 
  Label, 
  Header, 
  Text, 
  Title, 
  Right, 
  Button,
  Icon, 
  Content} from "native-base"
import { ScrollView, View, TouchableOpacity } from 'react-native'

import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export default class FormExample extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        headerTitle: (
            <View>
                <Text style = {{fontWeight:'bold', fontSize:18}}>Add New Hotel</Text>
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

  constructor(props){
      super(props)
      this.state = {
        form: {}
      }
  }

  handleForm = (type, value) => {
    let newFormData = {...this.state.form}
    newFormData[type] = value
    if ( value.length > 1 ) {
      this.setState({
        form: newFormData,
      })
    }
  }

  handleSubmit = () => {
    Axios.post('http://192.168.100.72:1010/hotel/', this.state.form)
      .then( async (res) => {
        await AsyncStorage.setItem('token',  res.data.accessToken)
        this.props.navigation.navigate('SettingScreen')
        console.warn()
      })
      .catch(err => console.warn(err))
  }

  render() {
    return (
      <Container style = {{padding:16}}>
        <ScrollView>
          <Text style = {{fontWeight:'bold', fontSize:24}}>Please Completed for Your Hotel!</Text>
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Hotel Name</Label>
                <Input onChangeText={ value => this.handleForm('hotel_name', value) } />
              </Item>
              <Item stackedLabel>
                <Label>City</Label>
                <Input onChangeText={ value => this.handleForm('city', value) }/>
              </Item>
              <Item stackedLabel>
                <Label>Address</Label>
                  <Input 
                    multiline = {true}
                    onChangeText={ value => this.handleForm('address', value) }/>
              </Item>
              <Item stackedLabel>
                <Label>Zip Code</Label>
                <Input onChangeText={ value => this.handleForm('zipcode', value) }/>
              </Item>
              <Item stackedLabel>
                <Label>Lattitude</Label>
                <Input onChangeText={ value => this.handleForm('lattitude', value) }/>
              </Item>
              <Item stackedLabel>
                <Label>Longtitude</Label>
                <Input onChangeText={ value => this.handleForm('longtitude', value) }/>
              </Item>
              <Item stackedLabel>
                <Label>Phone</Label>
                <Input onChangeText={ value => this.handleForm('phone', value) }/>
              </Item>
              <Item stackedLabel>
                <Label>Image URL</Label>
                <Input 
                    multiline = {true}
                    numberOfLines = {2}
                    onChangeText={ value => this.handleForm('image', value) }/>
              </Item>
              <Item stackedLabel>
                  <Label>Rate</Label>
                  <Input onChangeText={ value => this.handleForm('rate', value) }/>
              </Item>
            </Form>
          </Content>
        </ScrollView>
      </Container>
    )
  }
}