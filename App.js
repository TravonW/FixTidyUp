import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScanModal from "./Tabs/ScanModal";
import TabNavigator from "./navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";


const RootStack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='main' component={TabNavigator} />
        <RootStack.Screen name="ScanModal" component={ScanModal} options={{ animationEnabled: true, animation: 'slide_from_bottom' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
