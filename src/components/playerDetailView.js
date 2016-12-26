
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


class playerDetailView extends Component{
	constructor(props) {
	  super(props);
	
	  this.passProps = this.props.route.passProps;

	}

	render(){

		return(
			<View style={style.container}>
				<Image 
				source={{uri:'https://cdn.shopify.com/s/files/1/1221/4934/products/closeup_emelec_large.jpg?v=1474237777'}}
				style={styles.image}
				>
					<Text>Nombre:{this.passProps.name}</Text>
					<Text>Posicion:{this.passProps.type}</Text>
					<Text>Nacionalidad:{this.passProps.nationality}</Text>
					<Text>Nro:{this.passProps.jersey_number}</Text>
				</Image>
			</View>
			)
	}
}

module.exports=playerDetailView;