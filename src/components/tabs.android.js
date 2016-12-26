
'use strict'

import React, {
  Component,
} from 'react'
import {
  View,
  Text,
  Navigator,
} from 'react-native'

const Dashboard= require('./dashboardView')
const Noticias= require('./noticiasView')
const Equipo= require('./teamView')
const Estadisticas= require('./statisticsView')



import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

class Tabs extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

 render() {
    return <ScrollableTabView
      style={{marginTop: 30, backgroundColor:'white', transform: [{'translate':[0,20,0]}] ,}}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >

      <Equipo navigator={this.props.navigator} tabLabel='Equipo'/>
      <Estadisticas navigator={this.props.navigator} tabLabel='Estadisticas'/>



    </ScrollableTabView>;
  }
}




module.exports=Tabs;
