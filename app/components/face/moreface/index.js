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

export default class Alarm extends Component {
			render() {
				return (
					<View>
						<View style={styles.panel}>
							<Image source={require('../../../../resources/pz.png')} style={{height:160,width:160,marginTop:40}}/>
						</View>
					</View>
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
				panel:{
					flex:1,
					height:60,
					alignItems: 'center',
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
    
    

