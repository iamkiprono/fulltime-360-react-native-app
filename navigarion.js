import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import PostDetails from "./screens/PostDetails";
import LiveMatches from "./screens/LiveMatches";
import MenuBar from "./screens/MenuBar";

export default function Navigation() {
  return (
    <NavigationContainer className="">
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      >
        <Stack.Screen
          options={{ animation: "none", headerShown: false }}
          name="homescreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ animation: "none" }}
          name="Live"
          component={LiveMatches}
        />
        <Stack.Screen
          options={{ animation: "none" }}
          name="Post"
          component={PostDetails}
        />
        <Stack.Screen
          options={{ animation: "none", presentation: "modal" }}
          name="Menu"
          component={MenuBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
