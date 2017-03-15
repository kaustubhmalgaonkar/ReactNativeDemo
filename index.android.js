/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid
} from 'react-native';

var Login = require('./app/component/login/Login');
var Dashboard = require('./app/component/dashboard/Dashboard');
var _navigator;

export default class LeaveManagement extends Component {

  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Login':
        return(<Login navigator={navigator} title="Login" />);

      case 'Dashboard':
        return(<Dashboard navigator={navigator} data={route.data} />);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute = {{
          id: 'Login'
        }}
        renderScene = { (route, navigator) => this.navigatorRenderScene(route, navigator)}
      ></Navigator>
    );
  }
}

AppRegistry.registerComponent('LeaveManagement', () => LeaveManagement);
