import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Dimensions } from "react-native";
import { formatDistanceToNow } from "date-fns";
import Error from "../components/Error";

export default function PostDetails() {
  const { params } = useRoute();

  const { width, height } = Dimensions.get("window");

  const [singlePost, setSinglePost] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  const getSingleBlog = async () => {
    try {
      setError(false);
      setloading(true);
      const res = await fetch(
        `https://blog-api-kiprono.onrender.com/blogs/${params.id}`
      );
      const data = await res.json();
      setloading(false);
      setSinglePost(data);
    } catch (error) {
      setError(true);
      setloading(false);
    }
  };

  useEffect(() => {
    getSingleBlog();
  }, []);

  if (error) {
    return <Error retry={getSingleBlog} />;
  }

  return (
    <View>
      <ScrollView className=" pb-6">
        {loading && <ActivityIndicator />}
        <View className="">
          
          <Image
            className={`w-[${width}px] h-52 object-contain`}
            
            source={{ uri: singlePost?.image }}
          />
          <View className="px-4">
            <Text className="font-bold text-lg my-4">{singlePost?.title}</Text>
            <View className="mb-8">
              {/* <Text className="font-bold italic mb-4">
                {formatDistanceToNow(new Date(singlePost?.createdAt || singlePost?.datecreated),
                  {
                    addSuffix: true,
                  }
                )}
              </Text> */}
              {/* <Text>{singlePost?.createdAt || singlePost?.datecreated}</Text> */}
              <Text>{singlePost?.blog}</Text>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
}
