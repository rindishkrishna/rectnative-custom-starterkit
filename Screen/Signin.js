import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
    };
  }

  onClickListener = (viewId) => {
    Alert.alert('Alert', `Button pressed ${viewId}`);
  }

  render() {
    return (
      <View style={styles.container}>
      <View
style={{ paddingBottom: 20 }}
      >
      <Image source={require('../assets/mintt.png')} />
      </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/ac.png')} />
          <TextInput
style={styles.inputs}
              placeholder="Username"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({ fullName })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/pass.png')} />
          <TextInput
style={styles.inputs}
              placeholder="Password"
              secureTextEntry
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableHighlight>
<View style={{ flexDirection: 'row' }}>
        <TouchableHighlight
style={{ height: 45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  width: 150,
  borderRadius: 15,
backgroundColor: '#2d3561',
marginRight: 10 }} onPress={() => this.props.navigation.navigate('Signup')}
        >
          <Text style={styles.signUpText}>Sign Up</Text>

        </TouchableHighlight>
        <TouchableHighlight
style={{ height: 45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  width: 160,
  borderRadius: 15,
backgroundColor: '#2d3561',
}} onPress={() => this.props.navigation.navigate('Forgotpass')}
        >
          <Text style={styles.signUpText}> Forgot Password</Text>

        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#843b62',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 250,
      height: 45,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center'
  },
  inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: '#e25822',
  },
  signUpText: {
    color: 'white',
    fontSize: 20,
  }
});
