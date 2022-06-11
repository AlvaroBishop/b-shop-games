import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';


import HomeScreen from "./HomeScreen";
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
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
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