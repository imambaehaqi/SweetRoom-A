import React from 'react'
import Icon from 'native-base'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/MainScreen/OrderScreen'
import HistoryScreen from '../screens/MainScreen/MenuScreen'
import ChatScreen from '../screens/MainScreen/ChatScreen'

import SplashScreen from '../screens/AuthScreen/SplashScreen'
import LoginScreen from '../screens/AuthScreen/LoginScreen'
import RegisterScreen from '../screens/AuthScreen/RegisterScreen'

const HomeTabNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (  
                <Icon type="MaterialCommunityIcons" name="chat" style={{fontSize:22 , color:`${tintColor}`}} />
                ),
                title: 'Home'
            },
        },
        History: {
            screen: HistoryScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (  
                <Icon type="FontAwesome5" name="user-friends" style={{fontSize:22 , color:`${tintColor}`}} />
                ),
                title: 'In Progress'
            },
        },
        Chat: {
            screen: ChatScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                <Icon type="MaterialIcons" name="location-on" style={{fontSize:22, color:`${tintColor}`}}/>
                ),
                title: 'Chats'
            },
        }
    },{
        tabBarOptions: { 
            showIcon: true,
            activeTintColor: 'white',
            inactiveTintColor: '#999999',
            activeBackgroundColor: '#232b2b',
            inactiveBackgroundColor: '#232b2b',
            borderTopWidth: 0
        },
    }
)

const AuthStack = createStackNavigator(
    {
        Login: { screen: LoginScreen },
        Register: { screen: RegisterScreen }
    },{
        headerMode: 'none'
    }
)

const AppNavigation = createSwitchNavigator(
    {
        Splash: { screen: SplashScreen },
        Auth: { screen: AuthStack },
        HomeTab: { screen: HomeTabNavigation }
    },{}
)

export default createAppContainer( AppNavigation )