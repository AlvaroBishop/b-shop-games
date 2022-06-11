import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import DetailScreen from "./DetailScreen";
import Store from "./Store";

const Stack = createNativeStackNavigator();


const DetailStackNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                    borderColor: "#7ef7bd"
                  },
                  headerTintColor: "#7ef7bd",
                  headerBackTitle: "Back",
                  headerTitleAlign:'center'
            }}
        >
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="Details" component={DetailScreen}  />
        </Stack.Navigator>
        )
    }

export { DetailStackNavigator };