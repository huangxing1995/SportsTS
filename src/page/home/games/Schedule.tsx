import * as React from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  RefreshControl
} from 'react-native';
import MatchList from './MatchList'
import DateBar from './DateBar'
import {nbaStore} from '../../../store'
import {wrapComponent} from 'react-eflow'
import {NBA} from '../../../type'

const SCREEN_WIDTH = Dimensions.get('window').width;

export interface ScheduleProps{
  gamesList:NBA.GamesList;
  teamsList:NBA.TeamList;
}
export interface ScheduleState{
  isRefresh:boolean
}

export class Schedule extends React.Component<ScheduleProps,ScheduleState>{
  private _index:number = 0;
  private _max:number = 0;
  private _scrollView:any = null;
  private title:string[] = [];
  constructor(props:ScheduleProps){
    super(props);
    this.state={
      isRefresh: false
    };
    nbaStore.init();

  }
  componentWillReceiveProps(nextProp:ScheduleProps){
    this._max = nextProp.gamesList.length;
  }

  _onTouchStart(){

  }
  _onTouchEnd(){

  }
  _onScroll(){
    this._scrollView.scrollTo({x:this._index * SCREEN_WIDTH});
  }
  handlePressLeftArrow = ()=>{
    if (this._index === 0) return;
    --this._index;
    this._onScroll();
  };
  handlePressRightArrow = ()=>{
    if (this._index === (this._max-1)) return;
    ++this._index;
    this._onScroll();
  };

  handleRefresh = () =>{
    this.setState({isRefresh:true});
    setTimeout(()=>{
      this._scrollView = null;
      // nbaStore.init();
      this.setState({isRefresh:false})
    },2000)
  };
  render(){
    let {gamesList,teamsList} = this.props;
    let content =gamesList && gamesList.map((item:NBA.GamesList, i:number) => {
      this.title.push(item.title);
      return <MatchList
                list={item.tr}
                teamsList={teamsList}
                key={i}
                tabLabel={`${i}`}
                isRefresh={this.state.isRefresh}
                onRefresh={()=>this.handleRefresh}
      />
    });
    return(
     <View>
       <DateBar
         time={this.title[this._index]}
         onPressLeftArrow={this.handlePressLeftArrow}
         onPressRightArrow={this.handlePressRightArrow}
       />
       <ScrollView
         horizontal={true}
         onTouchStart={()=>this._onTouchStart()}
         onTouchMove={()=>console.log('onTouchMove')}
         onTouchEnd={()=>this._onTouchEnd()}
         onScroll={()=>console.log('scroll')}
         ref={(scrollView) => { this._scrollView = scrollView;}}
         pagingEnabled={true}
         showsHorizontalScrollIndicator={false}
       >
         {content}
       </ScrollView>
     </View>
    )
  }
}

export default wrapComponent(Schedule, [nbaStore.init,nbaStore.getTeamsList])