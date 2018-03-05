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
  Image,
  ImageBackground
} from 'react-native';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headers}>
          <Text style={styles.welcome}>
            实时报警信息
          </Text>
        </View>
        <View style={styles.alarminfobox}>
          <View style={styles.alarminfo1}>
            <View style={styles.infoicon}>
              <Image source={require('../../../resources/bjzs.png')} style={{height: 60,width:60,top:20,left:20}} />
            </View>
            <View style={styles.infotitle}>
              <Text  style={{fontSize:20,textAlign:'center',lineHeight:70}}>150</Text>
              <Text  style={{fontSize:14,textAlign:'center',lineHeight:20}}>报警总数</Text>
            </View>
          </View>
          <View style={styles.alarminfo2}>
            <View style={styles.infoicon}>
              <Image source={require('../../../resources/wcl.png')} style={{height: 60,width:60,top:20,left:20}}/>
            </View>
            <View style={styles.infotitle}>
              <Text style={{fontSize:20,textAlign:'center',lineHeight:70}}> 150</Text>
              <Text style={{fontSize:14,textAlign:'center',lineHeight:20}}> 未处理</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEEF4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  instructions: {
    marginTop:10,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 18,
  },
  headers:{
    height:50,
    backgroundColor:'#0066FF',
  },
  alarminfobox:{
    flexDirection: 'row',
    marginTop:10
  },
  alarminfo1:{
    flex:3,
    height:100,
    flexDirection: 'row',
    backgroundColor:"#fff"
  },
  alarminfo2:{
    flex:3,
    height:100,
    flexDirection: 'row',
    backgroundColor:"#fff",
    marginLeft:10
  },
  infoicon:{
    flex:1,
  },
  infotitle:{
    flex:1,
  }
});

