declare namespace NBA{
  export interface NBADataOrigin{
    reason:string;
    result:GamesResult;
    error_code:number;
  }
  export interface GamesResult{
    title:string; // tv living platform
    statuslist:object;
    list:Array<GamesListOneDay>;
    teammatch:TeamList
  }
  export interface GamesListOneDay{
    title:string; // date
    tr:Array<Game>;
    bottomlink:Link;
    live?:Array<Game>;
    livelink?:Array<Link>
  }
  export interface Game{
    title?:string;
    "time"?:string;
    "player1":string;
    "player2":string;
    "player1info"?:string;
    "player2info"?:string;
    "player1logo"?:string;
    "player2logo"?:string;
    "player1logobig"?:string;
    "player2logobig"?:string;
    "player1url"?:string;
    "player2url"?:string;
    "player1location"?:string;
    "player2location"?:string;
    "link1text"?:string;
    "link1url"?:string;
    "link2text"?:string;
    "link2url"?:string;
    "m_link1url"?:string;
    "m_link2url"?:string;
    "status"?:number,
    "score":string
    liveurl?:string;
    [k:string]:any;
  }
  export interface Link{
    text:string;
    url:string;
  }
  export interface TeamList{
    teamsList: Team[]
  }
  export interface Team{
    name:string;
    url:string;
  }
}
declare namespace TodayOnHistory{
  export type ID = number;
  export interface TodayOnHistoryOrigin{
    reason:string;
    result:Story[];
    error_code:number
  }
  export interface Story{
    day:string;
    date:string;
    title:string;
    e_id:number
  }
  export interface Detail{
    e_id:number;
    title:string;
    content:string;
    picNo:number;
    picUrl:Pic[]
  }
  interface Pic{
    pic_title:string;
    id:number;
    url:string;
  }
}


export {NBA,TodayOnHistory}
