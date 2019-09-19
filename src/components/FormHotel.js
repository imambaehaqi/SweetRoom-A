// import React, { Component } from "react"
// import { Container, Body, Form, Header, Text, Title, Right, Button } from "native-base"
// import { ScrollView } from 'react-native'
// import { MapView } from 'react-native-maps'

// import Axios from 'axios'
// import AsyncStorage from '@react-native-community/async-storage'


// export default class FormExample extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             form: {}
//         }
//     }

//     markerClick(){
//         console.log("Marker was clicked");
//     }

//     handleForm = (type, value) => {
//         let newFormData = {...this.state.form}
//         newFormData[type] = value
//         if ( value.length > 1 ) {
//             this.setState({
//                 form: newFormData,
//             })
//             // if ( type == 'password') {
//             //     this.setState({
//             //         send: true
//             //     })
//             // }
//         }
//         // if ( value.length < 1 ) { this.setState({ send: false })}
//     }

//     handleSubmit = () => {
//         Axios.post('http://192.168.100.72:1010/hotel/', this.state.form)
//             .then( async (res) => {
//                 await AsyncStorage.setItem('token',  res.data.accessToken)
//                 this.props.navigation.navigate('SettingScreen')
//                 console.warn()
//             })
//             .catch(err => console.warn(err))
//     }

//     render() {
//         return (
//             <Container >
//                 <Header style = {{backgroundColor:'white'}}>
//                     <Body>
//                         <Title>
//                             <Text style = {{fontWeight:'bold'}}>
//                                 YOUR HOTEL
//                             </Text>
//                         </Title>
//                     </Body>
//                     <Right>
//                         <Button bordered danger
//                             onPress={ () => this.handleSubmit()}
//                         >
//                             <Text>SAVE</Text>
//                         </Button>
//                     </Right>
//                 </Header>
//                 <Container style = {{padding:20}}>
//                     <ScrollView>
//                         <Text style = {{fontWeight:'bold', fontSize:24}}>Please Completed for Your Hotel!</Text>
//                         <Form>
//                             {/* <Item stackedLabel>
//                                 <Label>Hotel Name</Label>
//                                 <Input onChangeText={ value => this.handleForm('hotel_name', value) } />
//                             </Item>
//                             <Item stackedLabel>
//                                 <Label>City</Label>
//                                 <Input onChangeText={ value => this.handleForm('city', value) }/>
//                             </Item>
//                             <Item stackedLabel>
//                                 <Label>Address</Label>
//                                 <Input 
//                                     multiline = {true}
//                                     numberOfLines = {4}
//                                     onChangeText={ value => this.handleForm('address', value) }/>
//                             </Item>
//                             <Item stackedLabel>
//                                 <Label>Zip Code</Label>
//                                 <Input onChangeText={ value => this.handleForm('zipcode', value) }/>
//                             </Item>
//                             <Item stackedLabel>
//                                 <Label>Lattitude</Label>
//                                 <Input onChangeText={ value => this.handleForm('lattitude', value) }/>
//                             </Item>
//                             <Item stackedLabel>
//                                 <Label>Longtitude</Label>
//                                 <Input onChangeText={ value => this.handleForm('longtitude', value) }/>
//                             </Item>
//                             <Item stackedLabel>
//                                 <Label>Phone</Label>
//                                 <Input onChangeText={ value => this.handleForm('phone', value) }/>
//                             </Item>
//                             <Item stackedLabel>
//                                 <Label>Image URL</Label>
//                                 <Input 
//                                     multiline = {true}
//                                     numberOfLines = {2}
//                                     onChangeText={ value => this.handleForm('image', value) }/>
//                             </Item>
//                             <Item stackedLabel>
//                                 <Label>Rate</Label>
//                                 <Input onChangeText={ value => this.handleForm('rate', value) }/>
//                             </Item> */}
//                             <MapView 
//                                 initialRegion={{
//                                     latitude: 37.78825,
//                                     longitude: -122.4324,
//                                     latitudeDelta: 0.0,
//                                     longitudeDelta: 0.0,
//                                     }}>
//                                     {this.state.markers.map((marker) => (
//                                     <MapView.Marker
//                                         coordinate={marker.coordinate}
//                                         title={marker.title}
//                                         description={marker.description}>
//                                         <MapView.Callout tooltip >
//                                             <TouchableHighlight onPress= {()=>this.markerClick()} underlayColor='#dddddd'>
//                                                 <View >
//                                                     <Text>{marker.title}{"\n"}{marker.description}</Text>
//                                                 </View>
//                                             </TouchableHighlight>
//                                             </MapView.Callout>
//                                         </MapView.Marker>
//                                     ))}
//                             </MapView>
//                         </Form>
//                     </ScrollView>
//                 </Container>
//             </Container>
//         )
//     }
// }

import React from 'react'
import LocationView from "react-native-location-view"
import {View} from "react-native"


export default class SelectLocationScreen extends React.Component {
  state = {

  };

  render() {
    return(
      <View style={{flex: 1}}>
        <LocationView
          apiKey={"AIzaSyAX6otmcxTKksJ4OaTDZRBTyiEOJzJtLlo"}
          initialLocation={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />
      </View>
    );
  }
}
