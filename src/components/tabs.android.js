
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
const Estatadisticas= require('./statisticsView')



import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

class Tabs extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

 render() {
    return <ScrollableTabView
      style={{marginTop: 30, backgroundColor:'white', transform: [{'translate':[0,25,0]}] ,}}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Noticias tabLabel='Noticias'/>
      <Equipo tabLabel='Equipo'/>
      <Estatadisticas tabLabel='Estatadisticas'/>



    </ScrollableTabView>;
  }
}




module.exports=Tabs;
