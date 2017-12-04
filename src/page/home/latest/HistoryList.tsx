import * as React from 'react'
import {View,StyleSheet,ScrollView,Text,Dimensions} from 'react-native'
import {wrapComponent} from 'react-eflow'
import {nbaStore} from '../../../store'
import HistoryItem from './HistoryItem'
const {width,height} = Dimensions.get('window');
import Header from './Header'
import {BackToTop } from '../../../common/index'
import any = jasmine.any;

export interface HistoryListProps{
  todayOnHistoryList:any;
  navigate(screen:string,params?:object):any
}
export interface HistoryListState{
  refreshing:boolean;
}
export class HistoryList extends React.Component<HistoryListProps,HistoryListState>{
  sv:any = null;
  constructor(props:HistoryListProps){
    super(props);
    this.state = {
      refreshing: false
    }
  }
  componentDidMount(){

  }
  handleBackToTop = () => {
    this.sv && this.sv.crollTo({x:0,y:0,animated:true});
    // this.refs && this.refs.sv.scrollTo({x:0,y:0,animated:true});
    console.log('press here')
  }

  render(){
    let content:any = [];
    let map = this.props.todayOnHistoryList;
    let keys = [...map.keys()].reverse();
    keys.forEach((key) =>{
      content.push(<HistoryItem story={map.get(key)} key={key} navigate={this.props.navigate}/>)
    });

    return(
      <View style={{flex:1}}>
        <ScrollView style={{flex:1,backgroundColor:'#ccc',position:'relative'}} ref='sv'>
          <Header/>
          {content}
        </ScrollView>
        <BackToTop backToTop={this.handleBackToTop}/>
      </View>
    )
  }
}

export default wrapComponent(HistoryList,[nbaStore.getTodayOnHistory])