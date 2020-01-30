import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Boarding from "./Boarding";
import {Hooks} from "../Hooks";
import Icon from "react-native-vector-icons/Feather";
import Header from "./Header";


class Home extends Component {

    static contextType =Hooks;
  render() {
    return (
      <View>
      <Header />

        <Button title="hello"  />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 50,
    },
});



export default Home;

