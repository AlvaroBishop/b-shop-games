import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Store from "./src/screens/Store";
import GuessMyNumber  from "./src/screens/GuessMyNumber";

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
            <Stack.Screen name="GuessMyNumber" component={GuessMyNumber}  />
        </Stack.Navigator>
        )
    }

export { DetailStackNavigator };