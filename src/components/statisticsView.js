
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



class statisticsViewrr extends Component {

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

    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(responseData.statistics.seasons),
      loaded:true
    })

  })
}

renderSeasons(season){
  return(
    <TouchableHighlight onPress={()=> this.onPlayerPressed(season)}>
    <Image style={styles.backgroundImage} source={{uri:'https://images.unsplash.com/photo-1434648957308-5e6a859697e8?dpr=1&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop='}}>
     <View >
          <Text style={styles.season_name}>{season.name}</Text>
     </View>
     </Image>
    </TouchableHighlight>
    )
  
}


onPlayerPressed(season){

this.props.navigator.push({
      name: 'Detalles',
      title: season.name,
      passProps: {season:season}
    });
}

renderLoadView(){
   return(
    <View style={styles.container}>
    <Text style={styles.charging}>Cargando...</Text>
    </View>

    )
}

  render() {
   

         if (!this.state.loaded){
          return this.renderLoadView();
         }

         return(
          <ListView dataSource={this.state.dataSource}
                    renderRow={this.renderSeasons.bind(this)}
                    style={styles.listiew}
          />

          )

  }

}

const styles = StyleSheet.create({

 container: {
  flexDirection: 'row',
  backgroundColor:'white',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },
 charging:{
  fontFamily:'Roboto',
  fontSize:25,
  fontWeight: 'bold',
},
  backgroundImage:{
  	paddingTop: 60,
    height:100,

  },
   season_name:{
   	fontFamily:'Roboto',
    fontSize:25,
    fontWeight: 'bold',
    marginLeft:5,
    marginTop: 5,
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

    borderRadius:12,
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


module.exports=statisticsViewrr;
