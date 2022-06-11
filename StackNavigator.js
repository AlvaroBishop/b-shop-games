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
                backgroundColor: "#9AC4F8",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
            }}
        >
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="Details" component={DetailScreen}  />
        </Stack.Navigator>
        )
    }

export { DetailStackNavigator };