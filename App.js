import { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import * as SplashScreen from "expo-splash-screen";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import SmartHivesNavigator from "./app/navigation/SmartHivesNavigator";
import AddSmartHivesScreen from "./app/screens/AddSmartHivesScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import SmartHivesScreen from "./app/screens/SmartHivesScreen/SmartHivesScreen";
import TestSreen from "./app/screens/TestSreen";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [authToken, setAuthToken] = useState("");
  // const [appIsReady, setAppIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setAuthToken(token);
    // setAppIsReady(true);
  };

  useEffect(() => {
    restoreToken();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  // return <RegisterScreen />;
  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <NavigationContainer theme={navigationTheme}>
        {authToken ? <SmartHivesNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
