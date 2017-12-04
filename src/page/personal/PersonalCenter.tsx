import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

export default class PersonalCenter extends React.Component {

  static navigationOptions = ({navigation}:any) => {
    let {goBack} = navigation;
    return {
      headerLeft:(
        <TouchableOpacity onPress={()=>goBack()} style={{flexDirection:'row'}}>
          <Image source={require('../../../resource/back.png')} style={{width:20,height:20}}/>
          <Text style={{color:'white',fontSize:18}}>返回</Text>
        </TouchableOpacity>),
    }
  }
  render() {
    return (
      <View>
        <Text>this is personal center</Text>
      </View>
    );
  }
}

