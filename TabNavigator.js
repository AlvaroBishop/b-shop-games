import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';


import HomeScreen from "./src/screens/HomeScreen";
import { DetailStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;
          let rn = route.name

          if( rn === "Home")
          iconName = focused ? 'home' : 'home-outline';
          else if(rn === "Games")
          iconName = focused ? 'game-controller' : 'game-controller-outline';

          return <Ionicons name={iconName} size={size} color={ color } />
        },
        tabBarActiveTintColor: '#7ef7bd',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: "#7ef7bd", 
          borderTopWidth: 2,
        },
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "#7ef7bd",
          borderBottomWidth: 1,
        },
        headerTintColor: "#7ef7bd",
        headerBackTitle: "Back",
        headerTitleAlign:'center'
      })}
      
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        />
      <Tab.Screen name="Games" component={DetailStackNavigator} options={{ headerShown: false}}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;