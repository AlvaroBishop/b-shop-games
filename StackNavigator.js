import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Store from "./src/screens/Store";
import GuessMyNumber  from "./src/screens/GuessMyNumber";
import GuessYourNumber  from "./src/screens/GuessYourNumber";
import { ChooseYourGameScreen } from "./src/screens/ChooseYourGameScreen";
import PPoT from "./src/screens/PPoT";

const Stack = createNativeStackNavigator();


const MainStackNavigator = () => {
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
            <Stack.Screen name="GuessNumbers" component={GuessStackNavigator}  options={{ headerShown: false}}/>
            <Stack.Screen name="PPoT" component={PPoT}  />
        </Stack.Navigator>
    )
}

const GuessStackNavigator = () => {
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
            <Stack.Screen name="ChooseYourGame" component={ChooseYourGameScreen}  />
            <Stack.Screen name="GuessMyNumber" component={GuessMyNumber}  />
            <Stack.Screen name="GuessYourNumber" component={GuessYourNumber}  />
        </Stack.Navigator>
    )
}
export { MainStackNavigator };