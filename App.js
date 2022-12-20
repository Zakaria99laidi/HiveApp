import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddSmartHivesScreen from "./app/screens/AddSmartHivesScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import SmartHivesScreen from "./app/screens/SmartHivesScreen/SmartHivesScreen";
import TestSreen from "./app/screens/TestSreen";

export default function App() {
  return <AddSmartHivesScreen />;
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
