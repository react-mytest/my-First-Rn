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
    userInfo (){
        return (
            <View style={styles.infobox}>
							<View style={[styles.infocontentbox,styles.leftinfo]}>
								<Text style={{color:'#fff',fontSize:30}}>渣渣辉</Text>
								<Text style={{color:'#fff',fontSize:16,marginTop:5}}>协警</Text>
								<Text style={{color:'#fff',fontSize:16,marginTop:5}}>东关派出所</Text>
							</View>	
							<View style={styles.infocontentbox}>
								<Image source={require('../../../resources/tx.png')} style={{height:120,width:120,left:10,top:23}}/>
							</View>
            </View>
        )
		 }
		 message(){
			 return (
			 <View style={styles.messagebox}>
			 		<View style={{flex:2,flexDirection: 'column',}}>
				 		<Image source={require('../../../resources/xx.png')} style={{height:28,width:28,marginTop:10,left:20}}/>
					 </View>
					 <View style={{flex:20}}>
				 			<Text style={{left:70,lineHeight:40,fontSize:16}}>消息</Text>
					 </View>
			 </View>
			 )
		 }

		 operation(){
			 return (
				<View style={styles.operation}>
					<View style={{flex:1,marginBottom:5}}>
						<View style={{flex:2,height:40}}>
							<Image source={require('../../../resources/xgmm.png')} style={{height:28,width:28,left:23,top:3}}/>
						</View>
						<View style={{flex:20}}>
								<Text style={{left:70,lineHeight:35,fontSize:16,borderBottomWidth:1,borderBottomColor:"#E8E8E8"}}>修改密码</Text>
						</View>
					</View>
					<View style={{flex:1,marginBottom:5}}>
						<View style={{flex:2}}>
							<Image source={require('../../../resources/cljl.png')} style={{height:28,width:28,left:20,marginTop:20,top:3}}/>
						</View>
						<View style={{flex:20}}>
								<Text style={{left:70,lineHeight:35,fontSize:16,borderBottomWidth:1,borderBottomColor:"#E8E8E8",marginTop:20}}>处理记录</Text>
						</View>
					</View>
					<View style={{flex:1,marginBottom:5}}>
						<View style={{flex:2,marginTop:20}}>
							<Image source={require('../../../resources/rzgl.png')} style={{height:28,width:28,left:20,marginTop:20,top:3}}/>
						</View>
						<View style={{flex:20}}>
								<Text style={{left:70,lineHeight:35,fontSize:16,borderBottomWidth:1,borderBottomColor:"#E8E8E8",marginTop:20}}>日志管理</Text>
						</View>
					</View>
				</View>
			 )
		 }
  render() {
    return (
          <ImageBackground source={require('../../../resources/bj.png')} style={styles.backgroundImage}>
						<View style={{overflow:'hidden'}}>
            	{this.userInfo()}
						</View>
						<View>
							{this.message()}
						</View>
						<View>
							{this.operation()}
						</View>
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
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  backgroundImage:{
    flex:1,
    width:null,
		height:100,
		marginTop:-40,
    //不加这句，就是按照屏幕高度自适应
    //加上这几，就是按照屏幕自适应
    // resizeMode:Image.resizeMode.contain,
    //祛除内部元素的白色背景
    backgroundColor:'rgba(0,0,0,0)',
  },
  infobox: {
		flexDirection: 'row',
		top:60
	},
	infocontentbox:{
		flex:1
	},
	leftinfo:{
		top:35,
		left:20
	},
	messagebox:{
		height:45,
		backgroundColor:"#E5E5E5",
		top:220,
		justifyContent: 'center'
	},
	operation:{
		top:230,
		height:90,
	}
});

