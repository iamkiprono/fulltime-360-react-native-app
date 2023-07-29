import { View, Text, Button, Image } from "react-native";
import React from "react";

const Error = ({ retry }) => {
  return (
    <View className="flex-1 items-center justify-center ">
      <Image
        style={{ height: 160, width: 280 }}
        source={{
          uri: "https://www.seekpng.com/png/detail/212-2123432_404-error-error-404-in-png.png",
        }}
      />
      <Text className="text-xl mb-6">Something went wrong</Text>
      <Button onPress={() => retry()} title="Try Again" />
    </View>
  );
};

export default Error;
