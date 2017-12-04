import * as React from 'react'
import {ScrollView,Text,View,RefreshControl} from 'react-native'
import MatchItem from './MatchItem'
import pxToDp from "../../../util/pxToDp";

export interface MatchListProps{
  isRefresh:boolean;
  onRefresh:()=>any;
  list:any;
  teamsList:any;
  tabLabel:string
}
export interface Game{
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
export default class MatchList extends React.Component<MatchListProps,{}>{
  constructor(props:MatchListProps){
    super(props)
  }
  render(){
    return(
      <ScrollView
        style={{flex:1,backgroundColor:'#f0f0f0',paddingBottom:pxToDp(50)}}
        refreshControl={
          <RefreshControl
            refreshing={this.props.isRefresh}
            onRefresh={this.props.onRefresh}
          />
        }
      >
        {this.props.list && this.props.list.map((game:Game, index:number) => {
          return <MatchItem key={index} info={game}/>
        })}
      </ScrollView>
    )
  }
}