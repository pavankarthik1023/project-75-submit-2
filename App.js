import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from  './screens/HomeScreen';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory: ReadStoryScreen,
  HomeScreen:HomeScreen,
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)

      }
      else if(routeName === "HomeScreen"){
        return(
          <Image
          source={require("./assets/homescreen.jpg")}
          style={{width:40, height:40}}
          
        />)  
             
      }
    }
  })
})

const SwitchNavigator = createSwitchNavigator({
LoginScreen:{screen: LoginScreen},
TabNavigator:{screen: TabNavigator}
})


const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});