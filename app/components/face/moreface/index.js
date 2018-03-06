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
	Slider,
	Image,
	DeviceEventEmitter
} from 'react-native';

export default class Alarm extends Component {
	state = {
		value: 0,
	}
	render() {
		return (
			<View style={{ flexDirection: 'column', marginTop: 20 }}>
				<View style={styles.panel}>
					<Image source={require('../../../../resources/pz.png')} style={{ height: 130, width: 130 }} />
				</View>
				<View style={styles.panel1}>
					<View style={styles.liststyle}>
						<Text style={{ flex: 1, height: 40, lineHeight: 30, fontSize: 16 }}>对比库选择</Text>
						<Text style={{ flex: 1, lineHeight: 30, textAlign: 'right', paddingRight: 10, fontSize: 16 }}>抓拍库</Text>
						<Image source={require('../../../../resources/xz.png')} style={{ height: 20, width: 20, marginRight: 10, marginTop: 7 }} />
					</View>
					<View style={styles.liststyle}>
						<Text style={{ flex: 2, height: 40, lineHeight: 30, fontSize: 16 }}>相似度</Text>
						<Slider style={{flex:4}} />
						<Text style={{ flex: 1, height: 40, lineHeight: 30, fontSize: 16 }}>{this.state.value}</Text>
						<Image source={require('../../../../resources/xz.png')} style={{ height: 20, width: 20, marginRight: 10, marginTop: 7 }} />
					</View>
					<View style={styles.liststyle}>
						<Text style={{ flex: 1, height: 40, lineHeight: 30, fontSize: 16 }}>开始时间</Text>
						<Text style={{ flex: 1, lineHeight: 30, textAlign: 'right', paddingRight: 10, fontSize: 16 }}>抓拍库</Text>
						<Image source={require('../../../../resources/xz.png')} style={{ height: 20, width: 20, marginRight: 10, marginTop: 7 }} />
					</View>
					<View style={styles.liststyle}>
						<Text style={{ flex: 1, height: 40, lineHeight: 30, fontSize: 16 }}>结束时间</Text>
						<Text style={{ flex: 1, lineHeight: 30, textAlign: 'right', paddingRight: 10, fontSize: 16 }}>抓拍库</Text>
						<Image source={require('../../../../resources/xz.png')} style={{ height: 20, width: 20, marginRight: 10, marginTop: 7 }} />
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	allpanel: {
	},
	panel: {
		height: 130,
		justifyContent: 'center',
		alignItems: 'center',
	},
	panel1: {
		marginTop: 40,
	},
	liststyle: {
		height: 40, 
		flexDirection: "row",
		borderBottomWidth: 1, 
		borderBottomColor: "#DFDEE4", 
		marginLeft: 15,
		marginBottom:10
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		marginTop: 10,
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		fontSize: 18
	},
});



