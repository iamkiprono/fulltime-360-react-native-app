import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Tabs() {
  const navigation = useNavigation();
  return (
    <View className="p-4 flex-row justify-around">
      <TouchableOpacity className="px-4 py-2 bg-[#adccaa86]">
        <Text className="font-bold text-lg">
          News
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Live")}
        className="px-4 py-2 border "
      >
        <Text className="font-bold text-lg  ">Live</Text>
      </TouchableOpacity>
    </View>
  );
}
