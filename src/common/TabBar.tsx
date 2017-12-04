import * as React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {pxToDp} from '../util/index'
interface TabBarProps{
  goToPage?:(page:number)=>any;
  activeTab?:number;
  tabNames:string[]
}

interface TabBarState{

}

export default class TabBar extends React.Component<TabBarProps,TabBarState>{

  constructor(props:TabBarProps){
    super(props)
  }

  renderTabOption(tabName:string, index:number){
    const color = this.props.activeTab == index ? "#ffffff" : "#607890";
    return (
      <TouchableOpacity onPress={()=>this.props.goToPage&&this.props.goToPage(index)} style={styles.tab} key={index}>
        <View style={styles.tabItem}>
          <Text style={{color: color,fontSize:16}}>
            {tabName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render(){
    return(
      <View style={styles.tabs}>
        {this.props.tabNames.map((tabName, index) => this.renderTabOption(tabName, index))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',  //TODO:作用类似display：inline-block
    backgroundColor: '#003048'
  },

  tab: {
    flex: 1, //TODO:作用撑满父容器
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToDp(80),
  },
  tabItem:{

  }
});