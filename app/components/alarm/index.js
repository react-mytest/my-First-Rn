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

let badgeNumber = 11;
function bar(func = () => foo) {
    let foo = 'inner';
    console.log(func());
}

export default class Alarm extends Component {
  
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
							<Text tabLabel='黑名单报警'>黑名单报警</Text>
							<Text tabLabel='滞留报警'>滞留报警</Text>
							<Text tabLabel='异常时间出没'>异常时间出没</Text>
						</ScrollableTabView>
					)
			}
	}
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            marginTop:10,
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
            fontSize:18
        },
    });
    
    

