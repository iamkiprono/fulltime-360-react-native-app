import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuBar = () => {
  const navigation = useNavigation();
  return (
    <View className="p-6">
      <TouchableOpacity className='p-4 bg-white mb-4' onPress={()=>navigation.navigate("homescreen")}>
        <Text className="text-xl font-bold">News</Text>
      </TouchableOpacity>
      <TouchableOpacity className='p-4 bg-white mb-4' onPress={()=>navigation.navigate("Live")}>
        <Text className="text-xl font-bold">Live</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;
