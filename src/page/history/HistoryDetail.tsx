import * as React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native'

import {nbaStore} from '../../store/index'
import {wrapComponent} from 'react-eflow'
import {pxToDp} from '../../util/index'
export interface HistoryDetailProps{
  navigation:Navigation;
  todayHistoryDetail:any
}
export interface Navigation{
  state:{params:{e_id:number}};
  setParams:any;

}
export interface TodayHistoryDetail{
  title:string;

}
export class HistoryDetail extends React.Component<HistoryDetailProps,{}>{

  //  todo: 使用了eflow后navigation options无效
  static navigationOptions = ({navigation}:any) => {
    let {goBack} = navigation;
    return {
      headerBackTitle:false,
      headerLeft:(
        <TouchableOpacity onPress={()=>goBack()} style={{flexDirection:'row'}}>
          <Image source={require('../../../resource/back.png')} style={{width:20,height:20}}/>
          <Text style={{color:'red',fontSize:18}}>返回</Text>
        </TouchableOpacity>),
      headerTitle:'123'
    }
  };

  constructor(props:HistoryDetailProps){
    super(props);
    let {e_id} = props.navigation.state.params;
    nbaStore.getTodayOnHistoryDetail(e_id);
  }
  componentDidMount(){

    this.props.navigation.setParams({
      title:this.props.todayHistoryDetail.title
    })
  }
  render(){

   let {title,content,picNo,picUrl} = this.props.todayHistoryDetail; // picUrl:[{pic_title,id,url}]
    // let uri = picUrl ? {uri: picUrl[0].url} : require('../../resource/fed.jpg')
    return(
      <ScrollView style={styles.wrapper}>
        <View style={styles.title}>
          <Text style={{fontSize:30}} numberOfLines={2}>{title}</Text>
        </View>
        <View style={styles.content}>
          <Text style={{fontSize: 16, fontWeight:'200',lineHeight:(30)}}>{content}</Text>
        </View>

      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    // backgroundColor:'red'
  },
  title:{
    height:pxToDp(200),
    padding:pxToDp(50),
    // backgroundColor:'yellow'
  },
  content: {
    flex:1,
    padding:pxToDp(50),
    // backgroundColor:'#f0f0f0'
  }
});

export default wrapComponent(HistoryDetail,[nbaStore.getTodayOnHistoryDetail])