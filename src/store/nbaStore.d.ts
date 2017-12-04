import {Store} from 'react-eflow'
import {NBA,TodayOnHistory} from '../type'

export default class nbaStore extends Store<{}>{
  constructor();
  init():void
  getTeamsList(teamList:NBA.TeamList):void;
  getTodayOnHistory():void;
  getTodayOnHistoryDetail(id:TodayOnHistory.ID):void

}