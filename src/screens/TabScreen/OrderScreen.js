// import React, { Component } from 'react'
// import { Tabs, 
//     Tab, 
//     Text,
//     ListItem, 
//     Container, 
//     Body, 
//     Header, 
//     Title, 
//     Right, Icon } from 'native-base'

// export class OrderScreen extends Component {
//     state = {
//         curTime: null,
//     }

//     componentDidMount() {
//         setInterval( () => {
//             this.setState({
//             curTime : new Date().toLocaleString()
//             })
//         }, 1000)
//     }

//     render() {
//         return (
//             <Container>
//                 <Header style = {{backgroundColor:'white'}}>
//                     <Body>
//                         <Title>
//                             <Text style = {{fontWeight:'bold'}}>
//                                 Sweet Room
//                             </Text>
//                         </Title>
//                     </Body>
//                 </Header>
//                 <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}}>
//                     <Tab 
//                         heading="In Progess" 
//                         tabStyle={{backgroundColor: 'white'}} 
//                         textStyle={{color: 'black'}} 
//                         activeTabStyle={{backgroundColor: 'white'}} 
//                         activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
//                         <ListItem >
//                             <Body>
//                                 <Text>User Order{}</Text>
//                                 <Text note numberOfLines={1}>Rp. {}, Room Number{}</Text>
//                             </Body>
//                             <Right>
//                                 <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
//                             </Right>
//                         </ListItem>
//                         <ListItem >
//                             <Body>
//                                 <Text>User Order{}</Text>
//                                 <Text note numberOfLines={1}>Rp. {}, Room Number{}</Text>
//                             </Body>
//                             <Right>
//                                 <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
//                             </Right>
//                         </ListItem>
//                     </Tab>
//                     <Tab 
//                         heading="Completed" 
//                         tabStyle={{backgroundColor: 'white'}} 
//                         textStyle={{color: 'black'}} 
//                         activeTabStyle={{backgroundColor: 'white'}} 
//                         activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
//                         <ListItem>
//                             <Body>
//                                 <Text>User Order{}</Text>
//                                 <Text note numberOfLines={1}>Rp. {}, Room Number{}</Text>
//                                 <Text style={{fontSize:9, color:'grey'}}>{this.state.curTime}</Text>
//                             </Body>
//                             <Right>
//                                 <Text style={{fontSize:14, color:'tomato'}}>Canceled</Text>
//                                 <Icon type = "MaterialIcons" name = 'cancel' style={{color:'tomato'}}/>
//                             </Right>
//                         </ListItem>
//                         <ListItem>
//                             <Body>
//                                 <Text>User Order{}</Text>
//                                 <Text note numberOfLines={1}>Rp. {}, Room Number{}</Text>
//                                 <Text style={{fontSize:10, color:'grey'}}>{this.state.curTime}</Text>
//                             </Body>
//                             <Right>
//                                 <Text style={{fontSize:14, color:'green'}}>Completed</Text>
//                                 <Icon type = "MaterialIcons" name = 'check-circle' style={{color:'green'}}/>
//                             </Right>
//                         </ListItem>
//                     </Tab>
//                 </Tabs>
//             </Container>
//         )
//     }
// }

// export default OrderScreen

/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { View, Container, ListItem, Tab, Tabs } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'
import StarRating from 'react-native-star-rating'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import {URL} from '../configs'

class HistoryScreen extends Component{
    constructor(props) {
        super(props)
        this.state = {
            historyData: [],
        }
    }

    componentDidMount = async () => {
        await AsyncStorage.getItem('token')
            .then( (result) => {
                // await AsyncStorage.getItem('dataUser').then(
                //     async res => {
                //         const data = JSON.parse(res)
                //         this.setState({id: data.id})
                //         await Axios.get(`${URL}/hotel/mitra/${this.state.id}`)
                //             .then(res => {
                //                 console.warn(res.data.result.data)
                //             })
                //       }
                // )
                Axios.get(`${URL}/reservation/history/hotel/1`, {
                    headers: {
                        sweet_token: result
                    }
                })
                .then( res => {
                    this.setState({
                        historyData: res.data.data
                    })
                    console.warn(res)
                })
                .catch( err => console.warn('axios', err))
            })
            .catch( err => console.warn('async', err) )
    }

    _renderRow = ({item}) =>{
        let d2 = new Date(item.plan_checkout)
        let d1 = new Date(item.plan_checkin)
        let timediff = d2.getTime() - d1.getTime()
        let daysDiff = timediff / (1000 * 3600 * 24)
        return(
            <TouchableOpacity onPress={ item.status == 'PAID' ? () => {} : () => this.props.navigation.navigate('DetailPayment', {item: item})} style={styles.cardContainer} activeOpacity={0.95}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={{uri: item.image}} imageStyle={{borderRadius: 15}} style={{ width: '100%', height: '100%'}} />
                </View>
                <View style={styles.contentContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{ width: '65%' }}>
                            <Text style={styles.hotelName}>{item.hotel_name}</Text>
                            <View style={{ width: '30%',}}>
                                <StarRating
                                    disabled={true}
                                    emptyStar={'ios-star-outline'}
                                    fullStar={'ios-star'}
                                    halfStar={'ios-star-half'}
                                    iconSet={'Ionicons'}
                                    maxStars={5}
                                    rating={item.rate}
                                    fullStarColor={'#fbda91'}
                                    starSize={15}
                                />
                            </View>
                        </View> 
                        <View style={{ width: '35%', alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: 'AirbnbCerealMedium', fontSize: 13, color: `${item.status == 'PAID' ? 'green': 'red'}` }} >{item.status.toUpperCase()}</Text>
                        </View>
                    </View>
                    <View style={{ position: 'relative', marginTop: 8,}}>
                        <View style={{ flexDirection: 'row'}} >
                            <Text style={styles.price}>{item.price.slice(0, -3)}K</Text>
                            <Text style={styles.night}>{'/' + daysDiff + ' Night'}</Text>
                        </View>
                        <Text style={styles.dateText} >Date</Text>
                        <View style={{flexDirection: 'row', }}>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dueDate} >{new Date(item.plan_checkin).toLocaleDateString() + ' - ' + new Date(item.plan_checkout).toLocaleDateString()}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return(
            <Container>
                <ListItem itemDivider>
                    <Text style = {{fontWeight:'bold', fontSize:16}}>Sweet Room</Text>
                </ListItem>
                <ScrollView style={{ flex: 1, paddingTop: 15, }}>
                    <View style={styles.containerView}>
                        <FlatList 
                            data={this.state.historyData}
                            renderItem={this._renderRow}
                            keyExtractor={ (item) => item.id }
                        />
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    containerView:{
        paddingLeft: 13,
        paddingRight: 13,
        alignItems: 'center',
    },
    historyText: { fontFamily: 'AirbnbCerealMedium', alignSelf: 'flex-start', fontSize: 30, color: '#414141', marginBottom: 25},
    cardContainer: { backgroundColor: '#52525220', borderRadius: 15, width: '97%', height: 180, alignItems: 'center', flexDirection: 'row', marginLeft: 8, marginBottom: 8, shadowColor: "#000", },
    imageContainer: { width: '40%', height: 170, position: 'relative', left: -9, },
    hotelName: { fontFamily: 'AirbnbCerealMedium', color: '#414141', fontSize: 20 },
    contentContainer: {width: '57%', height: 150, },
    price: { fontFamily: 'AirbnbCerealMedium', color: '#414141', fontSize: 14 },
    night: { fontFamily: 'AirbnbCerealMedium', color: '#41414180', fontSize: 14, },
    dateText: { fontFamily: 'AirbnbCerealMedium', color: '#414141', fontSize: 16, marginTop: 20, marginBottom: 5},
    dateContainer: { backgroundColor: 'white', width: '90%', height: 30, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 5 },
    dueDate: { fontFamily: 'AirbnbCerealMedium', fontSize: 13, color: '#414141' }
})



export default HistoryScreen

