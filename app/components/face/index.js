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
  DeviceEventEmitter
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import MoreFace from './moreface/index.js'
export default class Face extends Component {
  
        render() {
          return (
            <ScrollableTabView
              style={{height:10,padding:0,margin:0}}
              tabBarUnderlineStyle={{backgroundColor:'#ccc',height:0}}
              tabBarBackgroundColor='#FFFFFF'
              tabBarActiveTextColor='#0066FF'
              tabBarInactiveTextColor='#9D9EA2'
              tabBarTextStyle={{fontSize: 14,paddingTop:9}}
              initialPage={1}
              renderTabBar={() => <DefaultTabBar />}>
              <View tabLabel='多人脸对比'>
                <MoreFace/>
              </View>
              <Text tabLabel='单人脸对比'>单人脸对比</Text>
              <View tabLabel='人脸采集'>
                <Text>人脸采集</Text>
              </View>
            </ScrollableTabView>
          )
        }
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            marginTop:10,
            textAlign: 'center',
            color: '#FFF',
            marginBottom: 5,
            fontSize:18
        },
    });
    
    

