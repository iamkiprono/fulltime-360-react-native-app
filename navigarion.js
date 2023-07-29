import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FIcon from "react-native-vector-icons/FontAwesome";
const Stack = createNativeStackNavigator();

import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import PostDetails from "./screens/PostDetails";

export default function Navigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <Stack.Screen
        options={{
          animation: "none",
          headerShown: true,
          headerRight: () => {
            return <Text className="text-lg font-bold">FullTime</Text>;
          },
          headerLeft: () => (
            <TouchableOpacity>
              <FIcon
                name="bars"
                size={24}
                onPress={() => navigation.toggleDrawer()}
              />
            </TouchableOpacity>
          ),
        }}
        name="News"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{ animation: "none", headerShown: true }}
        name="Post"
        component={PostDetails}
      />
    </Stack.Navigator>
  );
}
