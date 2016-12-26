
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
  ListView,
  Alert,
  TouchableHighlight
} from 'react-native'

const REQUEST_URL="https://api.sportradar.us/soccer-t3/am/es/teams/sr:competitor:5255/profile.json"

const Player= require('./playerDetailView')

class teamView extends Component {

constructor(props) {
  super(props);

  this.timestamp = 1;
  this.api_key = '35zyra558nkbn8t2bqvt5tz2';

  this.state= {
    dataSource: new ListView.DataSource({

      rowHasChanged:(row1,row2)=> row1!=row2

    }),
    loaded:false
  }




}

componentDidMount(){
  this.fetchData();
}

fetchData(){

  fetch(REQUEST_URL+'?api_key='+this.api_key)
  .then((response)=>response.json())
  .then((responseData)=>{
console.log(responseData)
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(responseData.players),
      loaded:true
    })

  })

}

renderPlayer(player){
  return(
    <TouchableHighlight onPress={()=> this.onPlayerPressed(player)}>
    <Image style={styles.backgroundImage} source={{uri:'http://www.estadio.ec/sites/default/files/fotos/2016/01/28/emelec-adidas-28-01-2016.jpg'}}>
     <View style={styles.box_left}>
      <Image 
          source={{uri:'https://cdn.shopify.com/s/files/1/1221/4934/products/closeup_emelec_large.jpg?v=1474237777'}}
          style={styles.image}
          />
     </View>
     <View style={styles.box_right}>
      <Text style={styles.title}>#{player.jersey_number} {player.name} </Text>
          <Text style={styles.country_code}>País:{player.country_code}</Text>
     </View>
    </Image>
    </TouchableHighlight>
    )
  
}


onPlayerPressed(player){
Alert.alert(
      player.name,
      'Estatura:'+player.height+'\nPeso:'+player.weight+'\nNacionalidad '+player.nationality ,
      [
        {text: 'OK'}
      ]
    );
}

renderLoadView(){
  return(
    <View style={styles.container}>
    <Text>Cargando</Text>
    </View>

    )
}

  render() {
   

         if (!this.state.loaded){
          return this.renderLoadView();
         }

         return(
          <ListView dataSource={this.state.dataSource}
                    renderRow={this.renderPlayer.bind(this)}
                    style={styles.listiew}
          />

          )

  }

}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    backgroundColor:'white',
  },
  backgroundImage:{
    alignSelf:'auto',
    height:150
  },
   title:{
    alignItems: 'flex-end',
    marginLeft:5,
    marginTop: 5,
    fontSize: 25,
    textAlign: 'justify',
    color:'white'
  },
  country_code:{
    alignItems: 'flex-end',
    marginLeft:5,
    fontSize: 15,
    textAlign: 'justify',
    color:'white'
  },
  image:{
     alignItems: 'flex-end',
    width: 65, 
    height: 65

  },
    box1: {
    flex:1,
    padding:10
  },
  box2: {
    flex:1,
    padding:10
  },
});


module.exports=teamView;
