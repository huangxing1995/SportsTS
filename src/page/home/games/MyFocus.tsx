import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import {pxToDp} from '../../../util/index'
export default class MyFocus extends React.Component{
  render(){
    return(
      <View style={styles.wrapper}>
        <Image
          source={require('../../../../resource/no_focus.png')}
          style={styles.gif}
          resizeMode='cover'/>
        <Text>{'你还没有关注的球队哦～'}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  wrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  gif:{
    width:pxToDp(200),
    height:pxToDp(200),
    opacity:0.5
  },
})