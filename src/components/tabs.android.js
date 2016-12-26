
'use strict'

import React, {
  Component,
} from 'react'
import {
  View,
  Text,
} from 'react-native'

const Dashboard= require('./dashboardView')
const Noticias= require('./noticiasView')
const Equipo= require('./teamView')

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

class Tabs extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

 render() {
    return <ScrollableTabView
      style={{marginTop: 30, backgroundColor:'white'}}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Noticias tabLabel='Noticias'/>
      <Equipo tabLabel='Equipo'/>

    </ScrollableTabView>;
  }
}




module.exports=Tabs;
