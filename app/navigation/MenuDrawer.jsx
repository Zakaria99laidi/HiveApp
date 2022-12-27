import React from "react";
import { View, Text, Button, StatusBar } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Screen from "../components/containers/Screen";
import SmartHivesNavigator from "./SmartHivesNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import MarketPlaceScreen from "../screens/MarketPlaceScreen";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Drawer.Navigator
        initialRouteName="smartHives"
        // edgeWidth={400}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "white",
            marginTop: 20,
            borderTopRightRadius: 10,
            // overflow: "hidden",
          },
          swipeEdgeWidth: 150,
          //   drawerContentContainerStyle: {
          //     borderWidth: 1,
          //     flex: 1,
          //     backgroundColor: "yellow",
          //   },
        }}
      >
        <Drawer.Screen name="Market Place" component={MarketPlaceScreen} />
        <Drawer.Screen
          name="Smart Hives"
          component={SmartHivesNavigator}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default MenuDrawer;
