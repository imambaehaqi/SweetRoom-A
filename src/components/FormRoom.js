import React, { Component } from "react"
import { Container, 
    Label, 
    Form, 
    Item, 
    Input, 
    Icon, 
    Button, 
    Text, 
    Toast,
    Picker} from "native-base"
import { TouchableOpacity } from 'react-native'
import { ScrollView } from "react-native-gesture-handler"
import Axios from "axios"
import AsyncStorage from "@react-native-community/async-storage"

export default class FormExample extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Add New Room',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.navigate('SettingRoom')} style = {{padding:10}}>
                    <Icon name='arrow-back' />
                </TouchableOpacity>
            )
        }
    }

    constructor(props){
        super(props)
        this.state = {
            id: '',
            selected2: undefined,
            form: {}
        }
    }

    onValueChange2(value: string) {
        this.setState({
            selected2: value
        })
    }

    handleForm = (type, value) => {
        let newFormData = {...this.state.form}
        newFormData[type] = value
        newFormData['user_id'] = this.state.id
        if ( value.length > 1 ) {
            this.setState ({
                form: newFormData
            })
        }
    }
    
    handleSubmit = () => {
        Axios.post('http://192.168.100.36:1010/room/', this.state.form)
        .then ( res => {
            this.props.navigation.navigate('ViewRoom')
            console.warn('succes', res)
            Toast.show ({
                text:'Succes Bang'
            })
        })
        .catch ( err => {
            console.warn(err)
            Toast.show ({
                text:'isien'
            })
        })
    }
    
    componentDidMount = async () => {
        await AsyncStorage.getItem('dataUser')
        .then ( res => {
            const data = JSON.parse(res)
            this.setState({
                id : data.id
            })
        })
    }

    render() {
        return (
            <Container style = {{padding:10}}>
                    <ScrollView>
                        <Form>
                            <Item picker>
                                <Label>Hotel Name</Label>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}>
                                    <Picker.Item label="Wallet" value="key0" />
                                </Picker>
                            </Item>
                            <Item stackedLabel>
                                <Label>Bad Type</Label>
                                <Input onChangeText = { value => this.handleForm('bed_type', value)}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Image URL</Label>
                                <Input onChangeText = { value => this.handleForm('image', value)}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Number Room</Label>
                                <Input onChangeText = { value => this.handleForm('number_room', value)}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Price</Label>
                                <Input onChangeText = { value => this.handleForm('price', value)}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Status</Label>
                                <Input onChangeText = { value => this.handleForm('status', value)}/>
                            </Item>
                            <Button bordered danger 
                                style = {{justifyContent:'center', marginBottom:10}}
                                onPress={ () => this.handleSubmit()}>
                                <Text>SAVE</Text>
                            </Button>
                        </Form>
                    </ScrollView>
            </Container>
        )
    }
}