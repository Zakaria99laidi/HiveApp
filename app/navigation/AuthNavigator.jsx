import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./routes";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
