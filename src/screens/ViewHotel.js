import React, { Component } from "react"
import { Container, 
    Tabs, 
    Text, 
    Icon,
    ListItem, 
    List,
    Fab } from "native-base"
import { TouchableOpacity, View, StyleSheet, FlatList, Image } from 'react-native'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import {URL} from '../screens/configs'
import { ScrollView } from "react-native-gesture-handler"

export default class CardHeaderFooterExample extends Component {
    constructor(props) {
        super(props)
        this.state ={
            id: '',
            hotelList: [],
            page: 0,
            hotelFlatLi: [],
            scrollBegin: false,
            search: '',
            turn: props.navigation.getParam('turn') || false,
            turnCity: props.navigation.getParam('turnCity') || false,
            city: props.navigation.getParam('city') || false,
        }
    }
    componentDidMount = async () => {
        await AsyncStorage.getItem('dataUser').then(
          async res => {
            const data = JSON.parse(res)
            this.setState({id: data.id})
            await Axios.get(`${URL}/hotel/mitra/${this.state.id}`)
                .then(res => {
                    console.warn(this.state.id)
                    this.setState({
                        hotelList: res.data.result.data,
                        page: 0
                    }, () => this.addRecords(0) )
                })
          }
        )
        // if (this.state.turn){
        // } else if (this.state.turnCity){
        //     Axios.get(`http://192.168.100.36:1010/hotel/search/${this.state.city}`)
        //         .then(res => {
        //             this.setState({
        //                 hotelList: res.data.result
        //             }, () => this.addRecords(0))
        //             console.log(res)
        //         })
        //         .catch(err => console.log(err))
        // }
    }
    addRecords = (page) => {
        // assuming this.state.hotelList hold all the records
        const newRecords = []
        for (let i = page * 12, il = i + 12; i < il && i < this.state.hotelList.length; i++){
            newRecords.push(this.state.hotelList[i]);
        }
        this.setState({
            hotelFlatLi: [...this.state.hotelFlatLi, ...newRecords]
        });
    }

    _renderRow = ({item}) =>{
        let image = item.image
        return(
            <TouchableOpacity style={{width: '49%', height: 200, marginBottom: 10, marginRight: 5}} onPress={ () => this.props.navigation.navigate('ViewRoomAct', {data: item})} activeOpacity={0.8} >
                <Image style={{ width: '100%', height: 120}} source={{uri: image ? image : 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg' }} />
                <Text style={styles.textCityCard}>{item.city.toUpperCase()}</Text>
                <Text style={styles.textNameCard}>{item.hotel_name}</Text>
                <Text style={styles.textPriceCard}>Start from Rp {item.price.slice(0, -3)}K/night</Text>
                <View style={{ width: '30%',}}>
                    {/* <StarRating
                        disabled={true}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        iconSet={'Ionicons'}
                        maxStars={5}
                        rating={item.rate}
                        fullStarColor={'#fbda91'}
                        starSize={15}
                    /> */}
                </View>
            </TouchableOpacity>
        )
    }
    
    render() {
        console.warn(this.state.hotelList)
        return (
            <Container>
                <List>
                    <ListItem itemDivider>
                        <Text style = {{fontWeight:'bold', fontSize:16}}>My List Hotel</Text>
                    </ListItem>
                    <ScrollView>
                        <FlatList
                            style = {{padding:16}}
                            data={this.state.hotelList}
                            renderItem={this._renderRow}
                            keyExtractor={ (item) => item.id }
                            numColumns={2}
                            onEndReached={this.onScrollHandler}
                            onEndReachedThreshold={0.1}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                    {/* <TouchableOpacity onPress = {() => this.props.navigation.push('EditHotel')}>
                        <CardItem thumbnail
                            style = {{borderBottomWidth:0.3}}>
                            <Left>
                                <Thumbnail square source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Bad Room No. 13</Text>
                                <Text note numberOfLines={2}>Price: Rp. 110.000</Text>
                            </Body>
                            <Right>
                                <Icon type="Ionicons" name="ios-arrow-forward" />
                            </Right>
                        </CardItem>
                    </TouchableOpacity> */}
                </List>
                <Fab
                    active={true}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#fb8691' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('FormHotel')}>
                    <Icon name="plus" type='FontAwesome'/>
                </Fab>
            </Container>
        )
    }  
}

const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b444b'
    },
    containerView:{
        paddingLeft: 13,
        paddingRight: 13,
    },
    textNameCard:{
        fontFamily: 'AirbnbCerealMedium',
        fontSize: 12,
        marginBottom: 2,
        color: '#414141',
    },
    textCityCard:{
        fontFamily: 'AirbnbCerealMedium',
        fontSize: 10,
        marginTop: 5,
        marginBottom: 2,
        color: '#414141',
    },
    textPriceCard:{
        fontFamily: 'AirbnbCerealMedium',
        fontSize: 10,
        marginBottom: 2,
        color: '#41414180',
    },
})