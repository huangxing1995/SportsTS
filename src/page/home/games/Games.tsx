import * as React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
// import * as ScrollableTabView from 'react-native-scrollable-tab-view'
const ScrollableTabView = require('react-native-scrollable-tab-view');

import Schedule from './Schedule'
import MyFocus from './MyFocus'
import {TabBar} from '../../../common/index'
import {pxToDp} from '../../../util/index'
import {} from 'react-navigation'
export interface GamesProps{
  navigation:Navigation;
}
export interface GamesState{
  tabNames:string[];
}
export interface Navigation{
  setParams:Function;
  navigate:Function;
}
class Games extends React.Component <GamesProps,GamesState>{
  static navigationOptions = ({navigation}:any) => {
    return ({
      tabBarLabel: '比赛',
      tabBarIcon: ({tintColor, focused}:{tintColor:string,focused:boolean}) => {
        let uri = focused
          ?require('../../../../resource/game.png')
          :require('../../../../resource/game_inactive.png');

        return (
          <Image
            source={uri}
            style={{width: pxToDp(50),height:pxToDp(50)}}
          />
        )
      },
      headerRight:
        <View style={{paddingRight:pxToDp(10)}}>
          <TouchableOpacity onPress={navigation.state.params?navigation.state.params.navigatePress:null}>
            <Image
              style={{width: pxToDp(60),height: pxToDp(60)}}
              source={require('../../../../resource/personal.png')}/>
          </TouchableOpacity>
        </View>,
      headerTitle: '比赛'
    })
  }

  constructor(props:GamesProps){
    super(props);
    this.state={
      tabNames: ['赛程','我的关注']
    }
  }
  componentDidMount(){
    let {setParams,navigate} = this.props.navigation;
    setParams({
      navigatePress:()=>navigate('PersonalCenter')
    })
  }

  render() {
    return (
       <View style={styles.wrapper}>
         <ScrollableTabView
           renderTabBar={()=>(<TabBar tabNames={this.state.tabNames}/>)}
           tabBarPosition={'top'}
           onChangeTab={(obj:{i:number})=> console.log(obj.i)}
           initialPage={0}
           locked={true}
         >
           <Schedule/>
           <MyFocus/>
         </ScrollableTabView>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'#f0f0f0'
  }
});

export default Games

