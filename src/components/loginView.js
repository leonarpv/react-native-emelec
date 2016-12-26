
'use strict'

import React, {
  Component
} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
  Alert,
  TouchableHighlight
} from 'react-native'

class loginView extends Component {
  render() {
    return(
      <Image style={styles.container} source={{uri:'https://images.unsplash.com/photo-1439736637365-748f240b24fb?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='}}>
          <View>
            <Image style={styles.logo_login} source={{uri:'https://pbs.twimg.com/profile_images/807332135895990272/4iwYIu0m_400x400.jpg'}}></Image>

            <TouchableHighlight style={styles.partner_login_button} onPress={(this.onLogin.bind(this))}>
            <Text style={styles.partner_login_text}>
              #VamosEmelec
            </Text>
            </TouchableHighlight>
          </View>
      </Image>
    )
  }
  onLogin(){
    this.props.navigator.replace({
      title:'Dashboard',
      name:'Home',
      passProps:{}
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_login:{
    width:200,
    height:200,
    marginLeft:20,
    borderRadius:100,
  },
  partner_login_button:{
    marginTop:30,
    backgroundColor:'#003366',
    width:250,
    height:50,
    alignItems:'center',
    borderRadius:5,
    justifyContent:'center',
  },
  partner_login_text:{
    fontFamily:'Roboto',
    fontSize:25,
    fontWeight: 'bold',
    color:'white',
  }
});


module.exports=loginView;
