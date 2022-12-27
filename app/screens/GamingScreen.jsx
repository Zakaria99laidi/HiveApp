import React from "react";
import { View, Text, StyleSheet } from "react-native";

import defaultStyles from "../config/defaultStyles";

const GamingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={defaultStyles.darkTitle}>Gaming Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GamingScreen;
