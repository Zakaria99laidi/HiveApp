import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import SmartHivesScreen from "../screens/SmartHivesScreen/SmartHivesScreen";
import AddSmartHivesScreen from "../screens/AddSmartHivesScreen";

const Stack = createNativeStackNavigator();

const SmartHivesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.SMART_HIVES}
      screenOptions={{
        headerShown: false,
        // animationTypeForReplace: "pop",
        // animation: "fade",
      }}
    >
      <Stack.Screen name={routes.SMART_HIVES} component={SmartHivesScreen} />
      <Stack.Screen
        name={routes.Add_SMART_HIVES}
        component={AddSmartHivesScreen}
      />
    </Stack.Navigator>
  );
};

export default SmartHivesNavigator;
