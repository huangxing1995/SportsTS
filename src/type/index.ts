declare namespace NBA{
  export interface Game{
    "time":string;
    "player1":string;
    "player2":string;
    "player1logo":string;
    "player2logo":string;
    "player1logobig":string;
    "player2logobig":string;
    "player1url":string;
    "player2url":string;
    "link1url":string;
    "m_link1url":string;
    "link2text":string;
    "link2url":string;
    "m_link2url":string;
    "status":number,
    "score":string
    "link1text":string;
  }
  export interface GamesList{
    title:string; //time
    tr:Game[];
    [k:string]:any
  }
  export interface Team{
    name:string;
    url:string;
  }
  export interface TeamList{
    teamsList: Team[]
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
declare namespace Navigation{

}

export {NBA,Navigation,TodayOnHistory}
