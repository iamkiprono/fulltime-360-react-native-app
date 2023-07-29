import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./navigarion";
import LiveMatches from "./screens/LiveMatches";
import { NavigationContainer } from "@react-navigation/native";
import Error from "./components/Error";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        
        }}
      >
        <Drawer.Screen name="Feed" component={Navigation} />
        <Drawer.Screen
          options={{ headerShown: true }}
          name="Live"
          component={LiveMatches}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
