
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
  ListView
} from 'react-native'

const REQUEST_URL="https://api.sportradar.us/soccer-t3/am/es/teams/sr:competitor:5255/profile.json"

class equipoView extends Component {

constructor(props) {
  super(props);

  this.timestamp = 1;
  this.api_key = '35zyra558nkbn8t2bqvt5tz2';

  this.state= {
    dataSource: new ListView.DataSource({

      rowHasChanged:(row1,row2)=> row1!=row2

    })
    loaded:false
  }




}

fetchData(){

  fetch(REQUEST_URL+'?api_key'+this.api_key)
  .then((response)=response.json())
  .then((responseData)=>{

    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(responseData.data.players),
      loaded:true
    })

  })

}

renderLoadView(){
  return(
    <View>
    <Text>Cargando</Text>
    </View>

    )
}

  render() {
    return(

         if (this.state.loaded==false) {
          return this.renderLoadView();
         }

         return(
          <ListView
            dataSource:{this.state.dataSource}
            renderRow:{this.renderPlayer.bind(this)}
            style={styles.listiew}
          />

          )
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


module.exports=equipoView;
