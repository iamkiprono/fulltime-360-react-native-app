import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Header from "../components/Header";
import News from "../components/News";
import Tabs from "../components/Tabs";




export default function HomeScreen() {
  return (
    <View className="flex-1 pt-12 pb-2  ">
      <Header />
      <Tabs />
      <ScrollView>
        <News />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
