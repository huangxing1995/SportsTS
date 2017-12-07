import * as React from 'react'
import {
  View,
  Text,
  Button,
  Image
} from 'react-native'

import {pxToDp} from '../../../util/index'



export default class Videos extends React.Component<any,any>{
  static navigationOptions = {
    tabBarLabel: '数据',
    tabBarIcon: ({ tintColor, focused }:any) => {
      let uri = focused
        ?require('../../../../resource/data.png')
        :require('../../../../resource/data_inactive.png');

      return (
        <Image
          source={uri}
          style={{width: pxToDp(50),height:pxToDp(50)}}
        />
      )
    }
  };

  constructor(props:any){
    super(props);
  }
  render() {
    let {navigate} = this.props.navigation;
    return (
      <View style={{marginTop:0}}>
        <Text>this is data page</Text>
        <Button
          title={"去个人中心"}
          onPress={()=>navigate('PersonalCenter')}/>
      </View>
    );
  }
}