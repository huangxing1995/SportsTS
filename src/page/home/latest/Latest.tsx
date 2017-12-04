import * as React from 'react'
import {
  Image,
} from 'react-native'
import {pxToDp} from '../../../util/index'
import HistoryList from './HistoryList'
export interface LatestProps{
  navigation: Navigation
}
export interface Navigation{
  navigate:(page:number,params:object)=>any
}
export default class Latest extends React.Component<LatestProps,{}>{
  static navigationOptions = ({navigation,screenProps}:any) => {
    return {
      tabBarLabel: '最新',
      tabBarIcon: ({ tintColor, focused }:any) => {
        let uri = focused
          ?require('../../../../resource/latest.png')
          :require('../../../../resource/latest_inactive.png');

        return (
          <Image
            source={uri}
            style={{width: pxToDp(50),height:pxToDp(50)}}
          />
        )
      },
      headerTitle:'历史上的今天'
    }
  };
  constructor(props:LatestProps){
    super(props);
  }
  render(){
    let navigate = this.props.navigation.navigate;
    return (
      <HistoryList navigate={(page:number,params:object)=>navigate(page,params)}/>
    );
  }
}