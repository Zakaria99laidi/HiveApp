import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

const StaticsCard = ({ value = 8, title = "Hives", width = 125, style }) => {
  return (
    <View style={[styles.container, { width: width }, style]}>
      <AppText style={styles.value}>{value}</AppText>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 20,
    borderRadius: 10,
  },
  value: {
    color: colors.grey,
    fontWeight: "800",
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 10,
  },
  title: {
    color: colors.grey,
    fontSize: 12,
    lineHeight: 15,
  },
});

export default StaticsCard;
