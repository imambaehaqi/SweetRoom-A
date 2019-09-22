import React from 'react'
import { Icon } from 'native-base'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import AuthLoadScreen from './Auth/AuthLoadScreen'
import SplashScreen from './Auth/SplashScreen'
import LoginScreen from './Auth/LoginScreen'
import SignBirthScreen from './Auth/SignUp/SignBirth'
import SignEmailScreen from './Auth/SignUp/SignEmail'
import SignNameScreen from './Auth/SignUp/SignName'
import SignPasswordScreen from './Auth/SignUp/SignPassword'

import OrderScreen from './TabScreen/OrderScreen'
import PaymentScreen from './TabScreen/PaymentScreen'
import RoomScreen from './TabScreen/RoomScreen'
import ChatScreen from './TabScreen/ChatScreen'
import ChatListScreen from './ChatList'
import SettingScreen from './TabScreen/SettingScreen'

import FormHotel from '../components/FormHotel'
import FormRoom from '../components/FormRoom'
import SettingRoom from './SettingRoom'
import ViewRoomAct from './ViewRoomAct'
import ViewRoomNonAct from './ViewRoomNonAct'
import EditRoom from '../components/EditRoom'
import ViewHotel from './ViewHotel'
import EditHotel from '../components/EditHotel'
import AvailibiltyRoom from '../components/AvailibilityRoom'
import RecheckRoom from '../components/RecheckRoom'
import RecheckRoomStats from '../components/RecheckRoomStats'
import EditProfile from './EditProfile'

const MainTabs = createBottomTabNavigator({
    Order: {
        screen: OrderScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'MaterialIcons' name = 'notifications-none' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'History',
        }
    },
    // Payment: {
    //     screen: PaymentScreen,
    //     navigationOptions: {
    //         tabBarIcon: ({ tintColor }) => (
    //             <Icon type = 'MaterialIcons' name = 'payment' style = {{fontSize: 22, color:`${tintColor}`}} />
    //         ),
    //         title: 'Payment'
    //     }
    // },
    Room: {
        screen: ViewHotel,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'MaterialCommunityIcons' name = 'room-service-outline' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Menu',
        }
    },
    Chat: {
        screen: ChatListScreen,
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
    }
},{
    initialRouteName: 'Order',
    tabBarOptions: {
        activeTintColor: '#fbda91',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#fb8691',
        inactiveBackgroundColor: '#fb8691',
        borderTopWidth: 0
    }
})

const SignUpNavigation = createStackNavigator(
    {
        Name: { screen: SignNameScreen },
        Email: { screen: SignEmailScreen },
        Password: { screen: SignPasswordScreen },
        Birthday: { screen: SignBirthScreen },
    },{
        headerMode: 'none'
    }
)

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
    RecheckRoom: { screen: RecheckRoom },
    RecheckRoomStats: { screen: RecheckRoomStats },
    ChatScreen: { screen: ChatScreen,
        navigationOptions: () => ({
            header: null
        })
    },
    ViewHotel: { screen: ViewHotel },
    EditProfile: { screen: EditProfile }
},{
    // initialRouteName:'FormHotel'
})

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
    SignUp: { screen: SignUpNavigation,
        navigationOptions: () => ({
            header: null
        })
    },
},{
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
})

const AppNavigation = createSwitchNavigator({
    AuthLoad: { screen: AuthLoadScreen},
    InitAuth: { screen: AuthStack },
    InitMain: { screen: MainStack}
},{
    // initialRouteName:'InitMain'
})

export default createAppContainer( AppNavigation )