import * as React from 'react'
import {Image,View,TouchableOpacity,Text} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {Home, PersonalCenter,HistoryDetail} from './page'
import {pxToDp} from './util'

const stackOptions = (navigation:any) => {

  return ({
    headerStyle:{
      backgroundColor: '#003048'
    },
    // headerTitle:'比赛',
    headerBackTitle:false,
    headerBackTitleStyle:{
      color:'white'
    },
    headerTitleStyle:{
      color:'white',
      fontSize: 20,
    },
    headerLeft: <Image
      style={{width: pxToDp(50),height: pxToDp(80)}}
      source={require('../resource/logo.png')}/>,
    headerRight:
      <View style={{paddingRight:pxToDp(10)}}>
        <TouchableOpacity onPress={()=>navigation.navigate('PersonalCenter')}>
          <Image
            style={{width: pxToDp(50),height: pxToDp(50)}}
            source={require('../resource/personal.png')}/>
        </TouchableOpacity>
      </View>,
  })

};
const Bpp = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}:any) => stackOptions(navigation)
  },
  PersonalCenter:{
    screen:PersonalCenter,
    navigationOptions:{
      headerStyle:{
        backgroundColor: '#003048'
      },
    }
  },
  HistoryDetail:{
    screen:HistoryDetail,
  }
});
class App extends React.Component<{},{}>{
  render(){
    return(
      <View>
        <Text>123</Text>
      </View>
    )
  }
}

export default Bpp
