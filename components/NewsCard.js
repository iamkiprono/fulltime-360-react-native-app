import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { formatDistanceToNow } from "date-fns";


export default function NewsCard({ content }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate("Post", { id: content._id })}
    >
      <View className="shadow-xl  p-2 my-4 bg-white rounded-md">
        <Image
          className="w-full h-64 object-contain"
          source={{ uri: content.image }}
        />
        <Text className="font-bold text-lg">{content.title}</Text>
        <Text>
          {formatDistanceToNow(
            new Date(content.createdAt || content.datecreated),
            {
              addSuffix: true,
            }
          )}
        </Text>

        <Text className="font-bold mt-2 w-full p-4 text-center  border-[.5px] items-center ">
          Read More
      
        </Text>
      </View>
    </TouchableOpacity>
  );
}
