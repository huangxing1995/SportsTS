import * as React from 'react'
import {TabNavigator} from 'react-navigation';
import {Games} from './games'
import {Data} from './data'
import {Latest} from './latest'
import {More} from './more'
import {Videos} from './videos'

const Home = TabNavigator({
  Games: {screen: Games},
  Latest: {screen: Latest},
  Videos: {screen: Videos},
  Data: {screen: Data},
  More: {screen: More},
},{
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  // initialRouteName:'Latest', // debugger main page
  tabBarOptions:{
    style: {
      backgroundColor: '#0060c0',
    },
    labelStyle:{
      fontSize: 12
    },
    activeTintColor: 'white',
    inactiveTintColor: '#aaa'
  }
});

export default Home