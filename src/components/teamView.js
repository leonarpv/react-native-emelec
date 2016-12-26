
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
  TouchableHighlight
} from 'react-native'

const REQUEST_URL="https://api.sportradar.us/soccer-t3/am/es/teams/sr:competitor:5255/profile.json"

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
    <TouchableHighlight>
    <Image style={styles.backgroundImage} source={{uri:'http://www.estadio.ec/sites/default/files/fotos/2016/01/28/emelec-adidas-28-01-2016.jpg'}}>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{player.name}</Text>
        
        </View>
    </Image>
    </TouchableHighlight>
    )
  
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
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'auto',
    height:50
  }
});


module.exports=teamView;
