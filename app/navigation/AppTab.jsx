import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

import AlertScreen from "../screens/AlertScreen";
import BlogScreen from "../screens/BlogScreen";
import ForumScreen from "../screens/ForumScreen";
import GamingScreen from "../screens/GamingScreen";
import SmartHivesNavigator from "./SmartHivesNavigator";
import colors from "../config/colors";
import routes from "./routes";
import MenuDrawer from "./MenuDrawer";

const Tab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <Tab.Navigator
      initialRouteName={routes.MARKET_PLACE_DRAWER}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          overflow: "hidden",
        },
        tabBarInactiveTintColor: colors.white,
        tabBarActiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name={routes.BLOG}
        component={BlogScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ActiveBarItem
              focused={focused}
              iconComponent={
                <Entypo name="new-message" size={size} color={color} />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.FORUM}
        component={ForumScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ActiveBarItem
              focused={focused}
              iconComponent={
                <MaterialCommunityIcons
                  name="forum-outline"
                  size={size}
                  color={color}
                />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.MARKET_PLACE_DRAWER}
        component={MenuDrawer}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ActiveBarItem
              focused={focused}
              iconComponent={
                <MaterialIcons name="wallet-travel" size={size} color={color} />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ALERT}
        component={AlertScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ActiveBarItem
              focused={focused}
              iconComponent={
                <MaterialIcons
                  name="notifications-none"
                  size={size}
                  color={color}
                />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.GAMING}
        component={GamingScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ActiveBarItem
              focused={focused}
              iconComponent={
                <Ionicons
                  name="md-game-controller-outline"
                  size={size}
                  color={color}
                />
              }
            />
          ),
        }}
      />
      {/* <Tab.Screen
      name={routes.LISTING_EDIT}
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNT}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    /> */}
    </Tab.Navigator>
  );
}

const ActiveBarItem = ({ iconComponent, focused = true }) => (
  <>
    {iconComponent}
    {focused && <View style={styles.activeTabBar}></View>}
  </>
);

const styles = StyleSheet.create({
  activeTabBar: {
    backgroundColor: "#A6A4A480",
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 70,
    position: "absolute",
    bottom: "1%",
  },
});
