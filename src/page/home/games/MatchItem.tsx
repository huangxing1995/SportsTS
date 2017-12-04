import * as React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native'
import {pxToDp} from '../../../util/index'

const WIDTH = Dimensions.get('window').width;

export interface MatchItemProps{
  info:Info;
}
export interface Info{
  time:string;
  player1:string;
  player2:string;
  player1logo:string;
  player2logo:string
  status:number
  score:string
  link1text:string;
  [key:string]:any
}
export default class MatchItem extends React.Component<MatchItemProps,{}>{
  constructor(props:MatchItemProps){
    super(props)
  }
  render(){
    let {
      time,
      player1:team1,
      player2:team2,
      player1logo:team1Logo,
      player2logo:team2Logo,
      status,
      score,
      link1text:hlLinkText
    } = this.props.info;

    let scores = score!='VS' ? score.split('-') : ['',''];
    let scoreOfTeam1 = scores[0] || '',
      scoreOfTeam2 = scores[1] || '';
    let isTeam1Lose = scoreOfTeam1 > scoreOfTeam2;
    let matchTime = time.split(' ')[1];
    let statusDesc = [matchTime,'直播中','已结束'];
    let notStart = status===0;

    let mockImgUri = require('../../../../resource/teamlogo.png')

    return(
      <View style={styles.wrapper}>
        <View style={styles.title}>
          <Text style={{color:'#666666',fontSize:12}}>NBA联盟通|HsingTV</Text>
        </View>
        <View style={styles.content}>
          <View style={[styles.team,{marginLeft:pxToDp(30)}]}>
            <Image
              source={mockImgUri}
              style={{width:pxToDp(130),height:pxToDp(130)}}
              resizeMode='cover'/>
            <Text style={styles.teamName}>{team1}</Text>
          </View>
          <View style={styles.detail}>
            <View style={styles.score}>
              <Text style={[styles.scoreTxt,{color: isTeam1Lose?'#999999':'black'}]}>{scoreOfTeam1}</Text>
            </View>
            <View style={styles.status}>
              <TouchableOpacity onPress={()=>{alert('预约成功')}}>
                <Text style={{fontSize:10,color:'#1878c0'}}>{notStart ? '预约观看':''}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{alert('点击了时间')}}>
                <Text style={{fontSize: notStart ? 24 : 12}}>{statusDesc[status]}</Text>
              </TouchableOpacity>
              <View style={[styles.link,{backgroundColor:notStart?'#0060c0':'#ffffff',borderColor:notStart?'#0060c0':'black'}]}>
                <TouchableOpacity onPress={()=>{alert('就不跳到视频直播')}}>
                  <Text style={[styles.linkTxt,{color:notStart?'#fff':'black'}]}>{hlLinkText}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.score}>
              <Text style={[styles.scoreTxt,{color:isTeam1Lose?'black':'#999999'}]}>{scoreOfTeam2}</Text>
            </View>
          </View>
          <View style={[styles.team,{marginRight:pxToDp(30)}]}>
            <Image
              source={mockImgUri}
              style={{width:pxToDp(130),height:pxToDp(130),}}
              resizeMode={'stretch'}/>
            <Text style={styles.teamName}>{team2}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  wrapper:{
    backgroundColor:'white',
    width:WIDTH,
    height: pxToDp(270),
    borderBottomColor:'#ccc',
    borderBottomWidth: pxToDp(1),
    marginBottom:pxToDp(30),
    justifyContent:'center',
    alignItems:'center',
    // borderColor:'red',
    // borderWidth:pxToDp(1),
  },
  title:{
    justifyContent:'center',
    alignItems:'center',
    height:pxToDp(50),
  },
  content:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    // borderColor:'red',
    // borderWidth:pxToDp(1),
  },
  team:{
    width:pxToDp(110),
    height:pxToDp(110),
    // borderColor:'blue',
    // borderWidth:pxToDp(1),
    justifyContent:'center',
    alignItems:'center',
  },
  teamName:{
    color:'#666666',
    fontSize:12
  },
  detail:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    // borderColor:'blue',
    // borderWidth:pxToDp(1),
  },
  score:{
    width:pxToDp(120),
    height:pxToDp(120),
    // borderColor:'green',
    // borderWidth:pxToDp(1),
    justifyContent:'center',
    alignItems:'center'
  },
  scoreTxt:{
    fontSize:26
  },
  status:{
    height:pxToDp(150),
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    // borderColor:'green',
    // borderWidth:pxToDp(1),
  },
  link:{
    width:pxToDp(150),
    height:pxToDp(40),
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth:pxToDp(2),
    borderRadius: pxToDp(20)
  },
  linkTxt:{
    fontSize:12,
    fontWeight:"bold",
  }
});