import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Donate from "../Tabs/Donate";
import Scan from "../Tabs/Scan";
import Tracking from "../Tabs/Tracking";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native-web';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator()

export default function TabNavigator() {

    return(
        <Tab.Navigator screenOptions={{headerShown: false}} >
            <Tab.Screen name="." style={styles.navbar} component={Tracking} options={{
            headerTitleAlign: 'center', tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={"black"} size={30} />
            ),
          }} />
          <Tab.Screen name=".." component={Scan} options={{
            headerTitleAlign: 'center', tabBarIcon: () => (<Ionicons name="ios-add-circle-sharp" color={"black"} size={30} />
            ),
          }}

          listeners={({ navigation }) => ({
              tabPress: event => {
                  event.preventDefault()
                  navigation.navigate('ScanModal')
              }
          })}
          />
          <Tab.Screen name="..." component={Donate} options={{
            headerTitleAlign: 'center', tabBarIcon: () => (<FontAwesome5 name="hand-holding-heart" color={"black"} size={26} />
            ),
          }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    navbar: {
      flex: 1,
      justifyContent: "center",
      color: 'red',
    }
  });