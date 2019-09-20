import React, { Component } from "react"
import { Container, 
  Form, 
  Item, 
  Input, 
  Label, 
  Text, 
  Button,
  Icon, 
  Toast,} from "native-base"
import { ScrollView, TouchableOpacity } from 'react-native'

import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export default class FormExample extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Add New Hotel',
      headerLeft: (
          <TouchableOpacity onPress={() => navigation.navigate('ViewHotel')} style = {{padding:10}}>
              <Icon name='arrow-back' />
          </TouchableOpacity>
      )
    }
  }
  
  constructor(props){
    super(props)
    this.state = {
      id: '',
      form: {}
    }
  }

  handleForm = (type, value) => {
    let newFormData = {...this.state.form}
    newFormData[type] = value
    newFormData['user_id'] = this.state.id
    if ( value.length > 1 ) {
      this.setState({
        form: newFormData, 
      })
    }
  }

  handleSubmit = () => {
    Axios.post('http://192.168.100.36:1010/hotel/', this.state.form)
      .then(res => {
        this.props.navigation.navigate('ViewHotel')
        console.warn('brerhasil',res)
        Toast.show({
          text: 'SUCCES BANG'
        })
      })
      .catch(err => {
        console.warn(err)
        Toast.show({
          text:'ISIEN SEK'
        })
      })
  }
  
  componentDidMount = async () => {
    await AsyncStorage.getItem('dataUser').then(
      res => {
        const data = JSON.parse(res)
        this.setState({id: data.id})
      }
    )
  }

  render() {
    return (
      <Container style = {{padding:16}}>
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
                  onChangeText={ value => this.handleForm('address', value) }/>
            </Item>
            <Item stackedLabel>
              <Label>Zip Code</Label>
              <Input onChangeText={ value => this.handleForm('zipcode', value) }/>
            </Item>
            <Item stackedLabel>
              <Label>Latitude</Label>
              <Input onChangeText={ value => this.handleForm('latitude', value) }/>
            </Item>
            <Item stackedLabel>
              <Label>Longitude</Label>
              <Input onChangeText={ value => this.handleForm('longitude', value) }/>
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
          <Button bordered danger 
            style = {{justifyContent:'center', marginTop:10}}
            onPress={ () => this.handleSubmit()}>
            <Text>SAVE</Text>
          </Button>
        </ScrollView>
      </Container>
    )
  }
}