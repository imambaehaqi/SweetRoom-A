import React from 'react'
import { Icon } from 'native-base'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import SplashScreen from '../screens/Auth/SplashScreen'
import LoginScreen from '../screens/Auth/LoginScreen'
import RegisterScreen from '../screens/Auth/RegisterScreen'

import OrderScreen from '../screens/TabScreen/OrderScreen'
import PaymentScreen from '../screens/TabScreen/PaymentScreen'
import MenuScreen from '../screens/TabScreen/MenuScreen'
import ChatScreen from '../screens/TabScreen/ChatScreen'
import SettingScreen from '../screens/TabScreen/SettingScreen'

import FormAddHotel from '../components/FormAddHotel'
import DetailScreen from '../screens/DetailScreen'

const AuthStack = createStackNavigator({
    Splash: { screen: SplashScreen },
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
},{
    defaultNavigationOptions: {
        header: null
      }
})

const MainTabs = createBottomTabNavigator({
    Order: {
        screen: OrderScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'AntDesign' name = 'search1' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Order'
        }
    },
    Payment: {
        screen: PaymentScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'AntDesign' name = 'search1' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Payment'
        }
    },
    Menu: {
        screen: MenuScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'AntDesign' name = 'search1' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Menu'
        }
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'AntDesign' name = 'search1' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Chat'
        }
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type = 'AntDesign' name = 'search1' style = {{fontSize: 22, color:`${tintColor}`}} />
            ),
            title: 'Setting'
        }
    },
},{
    tabBarOptions: {
        activeTintColor: '#fbda91',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#fb8691',
        inactiveBackgroundColor: '#fb8691',
        borderTopWidth: 0,
    }
})

const MainStack = createStackNavigator({
    Main: { screen: MainTabs },
})

const MenuStack = createStackNavigator({
    Main: { screen: MainTabs },
    FormAddHotel: { screen: FormAddHotel }
})

const DetailStack = createStackNavigator({
    Main: { screen: MainTabs },
    Detail: { screen: DetailScreen },
})

const AppNavigation = createSwitchNavigator({
    InitAuth: { screen: AuthStack },
    InitMain: { screen: MainStack},
    InitMenu: { screen: MenuStack},
    InitDetail: { screen: DetailStack }
})

export default createAppContainer( AppNavigation )