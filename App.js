import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';
import AppNavigator from './Navigation/Navigation';
import Home from "./Screen/Home";
import Theme from "./Hooks";
import {Walkthrough} from "./Walkthrough";


export default class HelloWorldApp extends Component {
    constructor(props) {
        super(props);

    }
  render() {
    return (
<Theme>
   <AppNavigator/>

</Theme>
    );
  }
}
