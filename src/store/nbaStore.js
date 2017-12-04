import {Store,dispatch,data,stateKey,param,flowFrom} from 'react-eflow'
import {fetchGamesList,fetchTodayOnHistory,fetchTodayOnHistoryDetail} from '../request'

// team tour
// 请求地址：http://op.juhe.cn/onebox/basketball/team
// 请求参数：dtype=&team=%E6%B9%96%E4%BA%BA&key=c7f5526b7087b059a4b5734f639d44c4
// 请求方式：GET
// h2h
// 请求地址：http://op.juhe.cn/onebox/basketball/combat
// 请求参数：dtype=&hteam=%E5%8B%87%E5%A3%AB&vteam=%E6%B9%96%E4%BA%BA&key=c7f5526b7087b059a4b5734f639d44c4
// 请求方式：GET


const
  BEFORE_LIVING = "未开赛",
  LIVING = "直播中",
  ENDED = "已结束";
// nba api
const APP_KEY = "c7f5526b7087b059a4b5734f639d44c4";
const url = "https://op.juhe.cn/onebox/basketball/nba?key="+APP_KEY;

// today on history api
// example: url?date=2/3&key=7a6e89b8276ee8ed63c9d4e34ae8c2f5
const APP_KEY_HISTORY = '7a6e89b8276ee8ed63c9d4e34ae8c2f5';
const historyUrl = 'https://v.juhe.cn/todayOnhistory/queryEvent.php';

// detail on history api
//example: url?e_id=1556&key=7a6e89b8276ee8ed63c9d4e34ae8c2f5
const detailUrl = 'https://v.juhe.cn/todayOnhistory/queryDetail.php';


export default class nbaStore extends Store{

  static StateKeys = {
    init: 'gamesList',
    getTeamsList: 'teamsList',
    getTodayOnHistory: 'todayOnHistoryList',
    getTodayOnHistoryDetail: 'todayHistoryDetail'
  };

  constructor(options){
    super(options);
    this.initState({
      teamsList:[],
      gamesList:[],
      todayOnHistoryList:new Map(),
      todayHistoryDetail: {}
      }
    );
    this.getTodayOnHistory.flowFrom(this.init)
  }

  init(){
    fetchGamesList(url)
      .then((data) => {
        console.log(data);
        let {result} = data;
        let {list,teammatch: teamsList} = result;
        this.init.dispatch(list);
        this.getTeamsList(teamsList)
      })
      .catch((err)=>{
        console.log('error')
      })
  }
  getTeamsList(teamsList){
    this.getTeamsList.dispatch(teamsList)
  }
  getTodayOnHistory(){
    let today = new Date(),
      month = today.getMonth(),
      date = today.getDate(),
      formatTime = `${++month}/${date}`;
    let url = `${historyUrl}?date=${formatTime}&key=${APP_KEY_HISTORY}`;
    fetchTodayOnHistory(url)
      .then((data) => {
        // console.log(data)
        if (data.reason === 'success'){
          let {result} = data; // type is []
          let map = new Map();
          result.forEach((item) => {
            let {e_id} = item;
            map.set(e_id,item)
          });

          this.getTodayOnHistory.dispatch(map)
        }
      })
      .catch(()=>{
        throw new Error()
      })
  }
  getTodayOnHistoryDetail(id){
    let url = `${detailUrl}?e_id=${id}&key=${APP_KEY_HISTORY}`;
    fetchTodayOnHistoryDetail(url)
      .then((data) => {
        if (data.reason==='success'){
          let {result} = data; // result only having 1 child type of object is a [];
          this.getTodayOnHistoryDetail.dispatch(result[0])
        }
      })
  }
}

