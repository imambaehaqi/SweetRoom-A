import React from 'react'
import { Icon } from 'native-base'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import AuthLoadScreen from '../screens/Auth/AuthLoadScreen'
import SplashScreen from '../screens/Auth/SplashScreen'
import LoginScreen from '../screens/Auth/LoginScreen'
import RegisterScreen from '../screens/Auth/RegisterScreen'

import OrderScreen from '../screens/TabScreen/OrderScreen'
import PaymentScreen from '../screens/TabScreen/PaymentScreen'
import RoomScreen from '../screens/TabScreen/RoomScreen'
import ChatScreen from '../screens/TabScreen/ChatScreen'
import SettingScreen from '../screens/TabScreen/SettingScreen'

import FormHotel from '../components/FormHotel'
import FormRoom from '../components/FormRoom'
import SettingRoom from '../screens/SettingRoom'
import ViewRoomAct from '../screens/ViewRoomAct'
import ViewRoomNonAct from '../screens/ViewRoomNonAct'
import EditRoom from '../components/EditRoom'
import EditHotel from '../components/EditHotel'
import AvailibiltyRoom from '../components/AvailibilityRoom'
import RecheckRoom from '../components/RecheckRoom'

const AuthStack = createStackNavigator({
    Splash: { screen: SplashScreen,
        navigationOptions: () => ({
            header: null
        })
    },
    Login: { screen: LoginScreen,
        navigationOptions: () => ({
            header: null
        })
    },
    Register: { screen: RegisterScreen },
},{
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
})

const MainTabs = createBottomTabNavigator({
    Order: {
        screen: OrderScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'MaterialIcons' name = 'notifications-none' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Order',
        }
    },
    Payment: {
        screen: PaymentScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'MaterialIcons' name = 'payment' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Payment'
        }
    },
    Room: {
        screen: RoomScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'Entypo' name = 'add-to-list' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Room',
        }
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'MaterialIcons' name = 'chat-bubble-outline' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Chat'
        }
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'EvilIcons' name = 'gear' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Setting'
        }
    },
},{
    initialRouteName: 'Payment',
    tabBarOptions: {
        activeTintColor: '#fbda91',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#fb8691',
        inactiveBackgroundColor: '#fb8691',
        borderTopWidth: 0
    }
})

const MainStack = createStackNavigator({
    Main: { screen: MainTabs,
        navigationOptions: () => ({
            header: null
        })
    },
    FormHotel: { screen: FormHotel },
    SettingRoom: { screen: SettingRoom },
    FormRoom: { screen: FormRoom },
    ViewRoomAct: { screen: ViewRoomAct },
    ViewRoomNonAct: { screen: ViewRoomNonAct },
    EditRoom: { screen: EditRoom },
    EditHotel: { screen: EditHotel },
    AvailibiltyRoom: { screen: AvailibiltyRoom },
    RecheckRoom: { screen: RecheckRoom }
},{
    // initialRouteName:'RecheckRoom'
})

const AppNavigation = createSwitchNavigator({
    AuthLoad: { screen: AuthLoadScreen},
    InitAuth: { screen: AuthStack },
    InitMain: { screen: MainStack}
},{
    initialRouteName:'InitMain'
})

export default createAppContainer( AppNavigation )