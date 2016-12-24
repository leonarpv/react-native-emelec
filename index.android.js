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
  TouchableHighlight
} from 'react-native';

  var NavigatorBarRouteMapper ={

    LeftButton:function (route,navigator,index) {

      if (index==0) {
          return null
      }



      return(
        <TouchableHighlight  style={styles.back_navigator_button} onPress={()=>{
          if(index > 0){
            navigator.pop();
          }
        }}>
          <Text  style={styles.back_navigator_button_text}> Atrás</Text>
        </TouchableHighlight>
      )

    },

    RightButton: function (route,navigator,index) {
      return null;
    },

    Title: function (route,navigator,index) {

      return(
        <Text style={styles.titles_navigator}>
          {route.name}
        </Text>
      )

    }


  }

const Login= require('./src/components/loginView')
const Dashboard= require('./src/components/dashboardView')

class emelec_app  extends Component{

  renderScene(route,navigator){

    switch (route.name) {
      case 'Login':
        return(
          <Login navigator={navigator} route={route}/>
        )
      case'Home':
      return(
        <Dashboard navigator={navigator} route={route}></Dashboard>
      )
    }

  }


  render() {
    return(

      <Navigator  style={styles.container_navigator}

        initialRoute={{name:'Login'}}

        renderScene={this.renderScene}

        configureScene={(route)=>{

          if (route.sceneConfig) {
            return route.sceneConfig;
          }

          return Navigator.SceneConfigs.FloatFromRight
        }}

      navigationBar={
        <Navigator.NavigationBar routeMapper={NavigatorBarRouteMapper}/>
      }
      />
    )
  }
}



const styles = StyleSheet.create({
  container_navigator:{
    backgroundColor:'#003366'
  },
  back_navigator_button:{
    marginTop:10,
    marginLeft: 20,
    backgroundColor:'#003366',
    width:50,
    height:20,
    borderRadius:5,
  },
  back_navigator_button_text:{
    fontFamily:'Roboto',
    fontSize:12,
    fontWeight: 'bold',
    color:'white',
  },
  titles_navigator:{
    fontFamily:'Roboto',
    color:'#003366',
    fontWeight: 'bold',
    marginLeft:50,
    alignItems:'center',
    fontSize:25,
    justifyContent:'center',
  }

});

AppRegistry.registerComponent('emelec_app', () => emelec_app);
