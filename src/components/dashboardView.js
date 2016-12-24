
'use strict'

import React, {
  Component
} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator
} from 'react-native'

class dashboardView extends Component {
  render() {
    return(

          <View style={styles.container}>
            <Image style={styles.logo_login} source={{uri:'https://marcadores.dataprensa.com/images/equipos/2015-08-24-11:55:05-emelec.png'}}></Image>
            <Text style={styles.title}>Aqui esta es Dashboard</Text>

          </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title:{
    fontFamily:'Roboto',
    color:'#003366',
    marginTop:-70,
    marginLeft:95,
    fontSize:35,
    textShadowOffset: {width: 1, height: -1}, textShadowRadius: 1, textShadowColor: '#f0f8ff',
    fontWeight: 'bold',

    alignSelf: 'stretch',
  },
  logo_login:{

    width:100,
    height:100,

  }
});


module.exports=dashboardView;
