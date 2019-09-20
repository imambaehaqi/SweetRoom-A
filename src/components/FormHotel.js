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
  Button } from "native-base"
import { ScrollView } from 'react-native'

import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export default class FormExample extends Component {
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
      <Container >
        <Header style = {{backgroundColor:'white'}}>
          <Body>
            <Title>
              <Text style = {{fontWeight:'bold'}}>
                YOUR HOTEL
              </Text>
            </Title>
          </Body>
          <Right>
            <Button bordered danger
                onPress={ () => this.handleSubmit()}>
                <Text>SAVE</Text>
            </Button>
          </Right>
        </Header>
        <Container style = {{padding:20}}>
          <ScrollView>
            <Text style = {{fontWeight:'bold', fontSize:24}}>Please Completed for Your Hotel!</Text>
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
                  numberOfLines = {4}
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
          </ScrollView>
        </Container>
      </Container>
    )
  }
}