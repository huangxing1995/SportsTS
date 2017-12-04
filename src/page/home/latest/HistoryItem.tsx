import * as React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native'
import {pxToDp} from '../../../util/index'
const WIDTH = Dimensions.get('window').width;

export interface HistoryItemProps{
  story:Story;
  navigate:(screen:string,params:object)=>any
}

export interface Story{
  e_id:number;
  day:string;
  title:string;
  date:string;
}
export default class HistoryItem extends React.Component<HistoryItemProps,any>{
  constructor(props:HistoryItemProps){
    super(props)
  }

  handlePress = () =>{
    let {
      e_id
    } = this.props.story;
    this.props.navigate('HistoryDetail',{e_id});
  }
  render(){
    let {
      day,
      title,
      date,
      e_id
    } = this.props.story;
    let year = date.split('年')[0];

    return(
      <View style={styles.wrapper}>
        <View style={styles.year}>
          <View style={styles.dot}></View>
          <View style={styles.time}>
            <Text style={{ color:'#183048',fontSize:16, fontWeight:'200'}}>{year}</Text>
          </View>
          <View style={styles.dot}></View>
          <View style={styles.line}></View>
        </View>
        <View style={styles.title}>
          <TouchableOpacity onPress={()=>this.handlePress()}>
            <Image source={require('../../../../resource/fed.jpg')} style={{width:pxToDp(150),height:pxToDp(150)}}/>
          </TouchableOpacity>
          <View style={{padding:pxToDp(20),flex:1}}>
            <Text
              style={{fontSize:18,fontWeight:'100'}}
              numberOfLines={3}
              onPress={()=>this.handlePress()}
            >
              {title}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  wrapper:{
    backgroundColor:'#f6f6f6',
    width:WIDTH,
    height: pxToDp(200),
    flexDirection:'row',
    justifyContent:'space-around',
  },
  title:{
    flex:1,
    height:pxToDp(150),
    flexDirection:'row',
    backgroundColor:'white'
  },
  year:{
    width:pxToDp(120),
    alignItems:'center',
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
  time:{

  }
});