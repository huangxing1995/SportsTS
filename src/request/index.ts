let data = require('../mockdata/data.json')
let story = require('../mockdata/story.json')
let detail = require('../mockdata/detail.json')

export function fetchGamesList(url:string){
  return new Promise((resolve, reject) => {
    // fetch(url,{
    //   mode: 'no-cors'
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) =>{
    //     resolve(json)
    //   })
    //   .catch((error) => {
    //     reject(error)
    //   })
    setTimeout(() => resolve(data),1000)
  })
}

export function fetchTodayOnHistory(url:string) {
  return new Promise((resolve, reject) => {
    // fetch(url,{
    //   mode: 'no-cors'
    // })
    //   .then((res)=>res.json())
    //   .then((json)=>resolve(json))
    setTimeout(()=>resolve(story),1000)
  })
}

export function fetchTodayOnHistoryDetail(url:string) {
  return new Promise((resolve, reject) => {
    // fetch(url,{
    //   mode: 'no-cors'
    // })
    //   .then((res)=>res.json())
    //   .then((json)=>resolve(json))
    setTimeout(()=>resolve(detail),1000)
  })
}