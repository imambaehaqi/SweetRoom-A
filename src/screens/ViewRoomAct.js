import React, { Component } from "react"
import { Container, 
    Content, 
    CardItem, 
    Text, 
    Body, 
    Icon,
    ListItem, 
    Left, 
    Button, 
    Thumbnail, 
    Fab, 
    List } from "native-base"
import { TouchableOpacity, View, ListView, StyleSheet, FlatList, Image } from 'react-native'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import {URL} from '../screens/configs'

export default class CardHeaderFooterExample extends Component {
    
    constructor(props) {
        super(props)
        this.state ={
            id: '',
            roomList: [],
            page: 0,
            hotelFlatLi: [],
            scrollBegin: false,
            search: '',
            data: props.navigation.getParam('data') || false,
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
            await Axios.get(`${URL}/room/${this.state.data.id}`)
                .then(res => {
                    console.warn(this.state.id)
                    this.setState({
                        roomList: res.data.result.data,
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
        //                 roomList: res.data.result
        //             }, () => this.addRecords(0))
        //             console.log(res)
        //         })
        //         .catch(err => console.log(err))
        // }
    }
    addRecords = (page) => {
        // assuming this.state.roomList hold all the records
        const newRecords = []
        for (let i = page * 12, il = i + 12; i < il && i < this.state.roomList.length; i++){
            newRecords.push(this.state.roomList[i]);
        }
        this.setState({
            hotelFlatLi: [...this.state.hotelFlatLi, ...newRecords]
        });
    }

    _renderRow = ({item}) =>{
        let image = item.image
        return(
            <TouchableOpacity style={{width: '49%', height: 200, marginBottom: 10, marginRight: 5}} onPress={ () => this.props.navigation.navigate('EditRoom', {data: item})} activeOpacity={0.8} >
                <Image style={{ width: '100%', height: 120}} source={{uri: image ? image : 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg' }} />
                <Text style={styles.textCityCard}>{item.bed_type.toUpperCase()}</Text>
                <Text style={styles.textNameCard}>{item.room_number}</Text>
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
    
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <View>
                    <Text style = {{fontWeight:'bold', fontSize:18}}>Room</Text>
                    <Text style = {{fontSize:12}}>View Room</Text>
                </View>
            ),
            headerLeft: (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Room')} style = {{padding:10}}>
                    <Icon name='arrow-back' />
                </TouchableOpacity>
            )
        }
    }
    
    render() {
        console.warn(this.props.navigation.getParam('data'))
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>Active</Text>
                        </ListItem>
                        <FlatList
                            style = {{padding:16}}
                            data={this.state.roomList}
                            renderItem={this._renderRow}
                            keyExtractor={ (item) => item.id }
                            numColumns={2}
                            onEndReached={this.onScrollHandler}
                            onEndReachedThreshold={0.1}
                            showsVerticalScrollIndicator={false}
                        />
                    </List>
                </Content>
                <Fab
                    active={true}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#fb8691' }}
                    position="bottomRight"
                    onPress = {() => this.props.navigation.push('FormRoom', {data: this.props.navigation.getParam('data')})}>
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