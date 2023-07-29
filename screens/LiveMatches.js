import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Error from "../components/Error";

export default function LiveMatches() {
  const navigation = useNavigation();

  const [error, setError] = useState(false);

  const openExternalLink = async (url) => {
    // Check if the link is supported
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Open the link with the default browser
      await Linking.openURL(url);
    } else {
      console.log("Cannot open the URL:", url);
    }
  };

  const handleExternalLinkPress = (url) => {
    openExternalLink(url);
  };

  const [loading, setLoading] = useState(false);
  const [matches, setmatches] = useState(null);

  const getMatches = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("https://blog-api-kiprono.onrender.com/live");
      const data = await res.json();
      setmatches(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  if (error) {
    return <Error retry={getMatches} />;
  }

  return (
    <View className="px-6 ">
      <Text className="text-red-500 text-center my-4 text-xl font-bold">
        Live Matches Today
      </Text>
      {loading && <ActivityIndicator />}

      { matches?.map((match) => {
        return (
          <TouchableOpacity
            className="p-6 mb-4 bg-white"
            key={match._id}
            onPress={() => handleExternalLinkPress(match.matchlink)}
          >
            <View className="flex-row justify-between items-center ">
              <View>
                <View className="flex-row items- p-2">
                  <Image
                    className="h-5 w-5 mr-4"
                    source={{ uri: match.homelogo }}
                  />
                  <Text>{match.hometeam}</Text>
                </View>
                <View className="flex-row items- p-2">
                  <Image
                    className="h-5 w-5 mr-4"
                    source={{ uri: match.awaylogo }}
                  />
                  <Text>{match.awayteam}</Text>
                </View>
              </View>
              <Text>Watch now</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
