
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

class statisticsDetailsView extends Component {
  constructor(props){
    super(props);
    this.passProps = this.props.route.passProps
   

  }

  render(){
    return(
      <View style={styles.container}>

      <Image source={{uri:'http://www.emelec.com.ec/archivos/imagenes/emelec_bsc_11052016.jpg'}} style={styles.image} />

      <Text style={styles.title_tournament}>{this.passProps.season.tournament.name} {this.passProps.season.tournament.category.name}</Text>
      <Text style={styles.matches_played}>Partidos Jugados {this.passProps.season.statistics.matches_played}</Text>
      <Text style={styles.matches_won}>Ganados {this.passProps.season.statistics.matches_won}</Text>
      <Text style={styles.matches_drawn}>Empatados {this.passProps.season.statistics.matches_drawn}</Text>
      <Text style={styles.matches_lost}>Perdidos {this.passProps.season.statistics.matches_lost}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 63,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title_tournament:{
            justifyContent:'center',
            alignItems: 'center',
    fontFamily:'Roboto',
    fontSize:25,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'gray',
  },
  matches_played:{
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:15,
    fontFamily:'Roboto',
    fontSize:15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
  },
  matches_won:{
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:15,
    fontFamily:'Roboto',
    fontSize:15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'green',
  },
  matches_drawn:{
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:15,
    fontFamily:'Roboto',
    fontSize:15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#ffbf00',
  },
  matches_lost:{
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:15,
    fontFamily:'Roboto',
    fontSize:15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#ff4800',
  },
  description:{
    marginTop:10,
    fontSize: 16,
  },
  modified:{
   marginTop: 10,
   fontSize:16,
   color: '#007AFF',
  },
  image: {
    alignSelf: 'stretch',
    height: 100,
  },
});

module.exports = statisticsDetailsView;