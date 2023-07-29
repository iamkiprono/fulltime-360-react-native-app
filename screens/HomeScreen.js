import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Header from "../components/Header";
import News from "../components/News";




export default function HomeScreen() {
  return (
    <View className="flex-1  pb-2  ">
      {/* <Header /> */}

      <ScrollView>
        <News />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
