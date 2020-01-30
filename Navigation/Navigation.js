import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screen/Home';
import Boarding from '../Screen/Boarding';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Image } from 'react-native'
import Icon from "react-native-vector-icons/Feather";
import Header from "../Screen/Header";
import {Walkthrough} from "../Walkthrough";
import Signup from "../Screen/Signup";
import Signin from "../Screen/Signup";
import Forgotpass from "../Screen/Forgotpass";
import SignUp from "../Screen/Signup";
class Drawerstyle extends Component{

    render(){
        return(<View><Text>Hello hackers</Text></View>
        )
    }
}

const Appdraw = createDrawerNavigator({

    Header:{screen:Header},
    Home: {
        screen: Home,
    },
    Boarding: {
        screen: Boarding,

    },

}, {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: Drawerstyle,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});

const AppNavigator = createStackNavigator({
        Walkthrough: {
            screen: Walkthrough
        },
    Home: {
        screen: Appdraw,
        navigationOptions: {
            headerShown: false
        }
    },
    Boarding: {
        screen: Appdraw,
    },
        Signup: {
            screen: Signup,
            navigationOptions: {
                headerShown: false
            }
        },
        Sig: {
            screen: Signin
            , navigationOptions: {
                headerShown: false
            }
        },
        SignUp: {
            screen: Signup,
            navigationOptions: {
                headerShown: false
            }
        },
        Forgotpass: {
            screen: Forgotpass
            , navigationOptions: {
                headerShown: false
            }

        },



},
    {
        initialRouteName: 'Walkthrough'
    }

);


export default createAppContainer(AppNavigator);
