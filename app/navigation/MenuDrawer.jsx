import React from "react";
import { View, Text, Button, StatusBar } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Screen from "../components/containers/Screen";
import SmartHivesNavigator from "./SmartHivesNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import MarketPlaceScreen from "../screens/MarketPlaceScreen";
import routes from "./routes";

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
        initialRouteName={routes.MARKET_PLACE}
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
        <Drawer.Screen
          name={routes.MARKET_PLACE}
          component={MarketPlaceScreen}
        />
        <Drawer.Screen
          name={routes.SMART_HIVES_NAV}
          component={SmartHivesNavigator}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name={routes.PROFILE}
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default MenuDrawer;
