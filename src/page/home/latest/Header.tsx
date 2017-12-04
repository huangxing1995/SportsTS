import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'
import {pxToDp} from '../../../util/index'

const {width} = Dimensions.get('window');
export default class Header extends React.Component<{},{}>{

  render(){
    return(
        <View style={styles.wrapper}>
          <View style={styles.pos}>
            <Image source={require('../../../../resource/pos.png')} style={{width:pxToDp(70),height:pxToDp(70)}}/>
            <View style={styles.dot}/>
            <View style={styles.line}/>
          </View>
          <View style={styles.title}>
            <Text style={{fontWeight:'400',fontSize:24}}>历史上的今天发生了什么</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor:'#f6f6f6',
    width,
    height: pxToDp(200),
    flexDirection:'row',
    justifyContent:'space-around',
  },
  pos:{
    width:pxToDp(120),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent',
    paddingTop:pxToDp(40)
  },
  title:{
    flex:1,
    height:pxToDp(150),
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'transparent'
  },
  dot:{
    width:pxToDp(16),
    height:pxToDp(16),
    // borderWidth:pxToDp(10),
    borderRadius:pxToDp(8),
    backgroundColor:'#4878a8'
  },
  line:{
    flex:1,
    width:pxToDp(5),
    backgroundColor:'#4878a8'
  },
})