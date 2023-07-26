import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center  px-4">
      <View className="items-center">
        <Text className="text-lg font-bold">FULLTIME</Text>
        <Text className="text-base font-bold text-[#5dc450]">360</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <FontAwesome name="bars" size={28} />
      </TouchableOpacity>
    
    </View>
  );
}
