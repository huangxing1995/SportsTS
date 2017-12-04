import {PixelRatio} from 'react-native'

export default function (px:number) {
  let ppi = PixelRatio.get();
  return px / ppi
}