
'use strict'

import React, {
  Component,
} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
  ScrollView,
} from 'react-native'



class noticiasView extends Component {
  render() {
    return(

          <View style={styles.container}>
            
            <Text>sdasadsasad</Text>

          </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#003366',
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


module.exports=noticiasView;
