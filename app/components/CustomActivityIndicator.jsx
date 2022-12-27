import { View, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";

export default function CustomActivityIndicator({
  animating,
  color,
  size = 100,
}) {
  if (!animating) return null;
  return (
    <View style={styles.overlay}>
      <ActivityIndicator animating={animating} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "white",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    opacity: 0.6,
  },
});
