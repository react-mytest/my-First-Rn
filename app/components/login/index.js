/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ScrollView,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ImageBackground,
  TouchableHighlight
} from 'react-native';




export default class Login extends Component{
  static navigationOptions = {
    title: 'homeThree',
    header:null,
    cardStack: {
        gesturesEnabled: false  // 是否可以右滑返回
    }
  };
  render() {
    return (
        <ImageBackground source={require('../home/img/bj.png')} style={styles.backgroundImage}>
          <Text style={styles.vion}>VIONVISION</Text>
          <TouchableHighlight onPress={()=>{
              const { navigate } = this.props.navigation;
              navigate('MyTab');
        }} style={styles.vionbtn} underlayColor="rgba(34, 26, 38, .1)">
            <Text >跳过</Text>
          </TouchableHighlight>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  vionbtn:{
    padding: 8,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    bottom:10,
    right:-120
  },
  backgroundImage:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:null,
    height:null,
    //不加这句，就是按照屏幕高度自适应
    //加上这几，就是按照屏幕自适应
    //resizeMode:Image.resizeMode.contain,
    //祛除内部元素的白色背景
    backgroundColor:'rgba(0,0,0,0)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  vion:{
      flex:1,
      alignItems: 'center',
      marginTop:300,
      fontSize:40
  },
  b:{
      flex:3
  }
});
