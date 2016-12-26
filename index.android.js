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
  Image,
  TouchableHighlight
} from 'react-native';

  var NavigatorBarRouteMapper ={

    LeftButton:function (route,navigator,index) {


    if(route.name=='Login' || route.name=='Dashboard'){
      return null;
    }
    return(<TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={() => {
              if(index > 0){
                navigator.pop();
              }
          }}>

            <Text style={styles.back_button}>Atras</Text>
         </TouchableHighlight>
    )
      

    },

    RightButton: function (route,navigator,index) {

            if (index<=0) {
      return null
      }

      return(

      <TouchableHighlight style={styles.logo_top}>
        <Image 
          source={{uri:'https://ls.sportradar.com/ls/crest/big/5255.png'}}
          style={styles.image}
          />
      </TouchableHighlight>
        
    
      )
    },

    Title: function (route,navigator,index) {


      return(
        <Text style={styles.title_top_taps_navigator}>
          {route.title} 
        </Text>
      )

    }


  }


const Login= require('./src/components/loginView')
const Dashboard= require('./src/components/dashboardView')
const Tabs= require('./src/components/tabs')
const Team= require('./src/components/teamView')

const Details= require('./src/components/statisticsDetailsView')

class emelec_app  extends Component{

  renderScene(route,navigator){

    switch (route.name) {
      case 'Login':
        return(
          <Login {...route.props} navigator={navigator} route={route}/>
        )
      case'Home':
      return(
        <Tabs {...route.props} navigator={navigator} route={route}/>

      )
      case'Detalles':
      return(
        <Details {...route.props} navigator={navigator} route={route}/>

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
    alignItems: 'center',
    backgroundColor: '#003366',
    height:40,
  },
  title_top_taps_navigator:{
    fontFamily:'Roboto',
    color:'#003366',
    fontWeight: 'bold',
    color:'white',
    fontSize:20,
    marginTop:15
  },
  back_button:{
    fontFamily:'Roboto',
    color:'#003366',
    fontWeight: 'bold',
    color:'white',
    fontSize:20,
    marginTop:15
  },
   image:{
    width: 40, 
    height: 40
  },

});

AppRegistry.registerComponent('emelec_app', () => emelec_app);
