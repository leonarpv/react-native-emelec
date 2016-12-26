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

        <TouchableHighlight  style={{backgroundColor:'white'}} onPress={()=>{
          if(index > 0){
            navigator.pop();
          }
        }}>
          <Text   style={styles.top_taps_navigator} >Atrás</Text>
        </TouchableHighlight>
      )

    },

    RightButton: function (route,navigator,index) {

      return null
    },

    Title: function (route,navigator,index) {


      return(
        <Text style={styles.title_top_taps_navigator}>
          {route.name}
        </Text>
      )

    }


  }

const Login= require('./src/components/loginView')
const Dashboard= require('./src/components/dashboardView')
const Tabs= require('./src/components/tabs')

class emelec_app  extends Component{

  renderScene(route,navigator){

    switch (route.name) {
      case 'Login':
        return(
          <Login navigator={navigator} route={route}/>
        )
      case'Home':
      return(
        <Tabs navigator={navigator} route={route}/>

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
        <Navigator.NavigationBar  style={styles.navigator_tabs} routeMapper={NavigatorBarRouteMapper}/>
      }
      />
    )
  }
}



const styles = StyleSheet.create({
    container_navigator:{
    backgroundColor:'#003366'
  },
  navigator_tabs: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
    height:40,
  },
  top_taps_navigator:{
    fontFamily:'Roboto',
    color:'white',
    fontWeight: 'bold',
    fontSize:25,
  },
  title_top_taps_navigator:{
    fontFamily:'Roboto',
    color:'#003366',
    fontWeight: 'bold',
    color:'white',
    fontSize:25,
    marginTop:15
  }

});

AppRegistry.registerComponent('emelec_app', () => emelec_app);
