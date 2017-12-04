import * as React  from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import {pxToDp} from '../../../util/index'

interface Props{
  onPressLeftArrow():void;
  onPressRightArrow():void;
  time:string;
  [key:string]:any
}
interface State{
  isLeftArrowDisable:boolean;
  isRightArrowDisable:boolean
}
export default class DateBar extends React.Component<Props,State>{
  timerLeft:any = null
  timerRight:any = null

  constructor(props:Props){
    super(props);
    this.state = {
      isLeftArrowDisable: false,
      isRightArrowDisable: false
    }
  }

  handlePressLeftArrow = async () =>{
    this.props.onPressLeftArrow && this.props.onPressLeftArrow();
    await this.setState({isLeftArrowDisable:true})
    this.timerLeft = setTimeout(async ()=>{
      await this.setState({isLeftArrowDisable:false})
    },300)
  };

  handlePressRightArrow = async () =>{
    this.props.onPressRightArrow && this.props.onPressRightArrow();
    await this.setState({isRightArrowDisable:true})
    this.timerRight = setTimeout(async ()=>{
      await this.setState({isRightArrowDisable:false})
    },300)
  };


  componentWillUnmount(){
    clearTimeout(this.timerLeft);
    clearTimeout(this.timerRight);
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={this.handlePressLeftArrow}
          disabled={this.state.isLeftArrowDisable}>
          <Image
            source={require('../../../../resource/arrow_left.png')}
            style={styles.img}/>
        </TouchableOpacity>

        <View style={styles.title}>
          <Text style={styles.titleTxt}>{this.props.time}</Text>
        </View>

        <TouchableOpacity
          style={styles.arrow}
          onPress={this.handlePressRightArrow}
          disabled={this.state.isRightArrowDisable}>
          <Image
            source={require('../../../../resource/arrow_right.png')}
            style={styles.img}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flexDirection: 'row',
    height: pxToDp(80),
    backgroundColor: '#183048',
    justifyContent: 'center',
    alignItems:'center',
  },
  title:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  titleTxt:{
    color:'white',
  },
  arrow:{
    width:pxToDp(150),
    height:pxToDp(80),
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red'
  },
  img:{
    width:pxToDp(40),
    height:pxToDp(40)
  }
});