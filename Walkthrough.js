import React, {Component} from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AppNavigator from "./Navigation/Navigation";
import Home from "./Screen/Home";
export class Walkthrough extends Component {

    render() {
        return (
            <Onboarding onDone={()=>this.props.navigation.navigate('Signup')}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('./Screen/mintt “Earn money online”.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Hurray',
                    },

                ]}
            />


        );
    }
}











