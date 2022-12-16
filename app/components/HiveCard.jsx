import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import Floor from "./Floor";

const HiveCard = ({
  title = "Hive 1",
  batteryLevel = 82,
  update = "2022-10-26 12:19:24",
  numFloors = 3,
  temperature_1 = 28.7,
  temperature_2 = 28.7,
  humidity = 95.7,
  weight = 43.5,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* -------------------------------------- Card Header --------------------------- */}
      <View style={styles.header}>
        <AppText style={defaultStyles.darkTitle}>{title}</AppText>
        <ImageBackground
          source={require("../assets/images/batteryLevel.png")}
          style={styles.batteryLevel}
          resizeMode="cover"
        >
          <AppText style={styles.batteryLevelText}>
            {batteryLevel + "%"}
          </AppText>
        </ImageBackground>
      </View>

      {/* -------------------------------------- Card Main --------------------------- */}
      <View style={styles.main}>
        <View style={styles.mainLeftSide}>
          {numFloors !== 0 && (
            <View style={styles.floorsContainer}>
              {Array(numFloors)
                .fill(1)
                .map((item, index) => (
                  <Floor key={index} />
                ))}
            </View>
          )}
        </View>
        <View style={styles.mainRightSide}>
          <View style={styles.statusContainer}>
            <AppText>Status</AppText>
            <View style={styles.status} />
          </View>
          <AppText>Temperature 1: {temperature_1} °C</AppText>
          <AppText>Temperature 2: {temperature_2} °C</AppText>
          <AppText>Humidity: {humidity} %</AppText>
          <AppText>Weight: {weight} Kg</AppText>
        </View>
      </View>

      {/* -------------------------------------- Card Footer --------------------------- */}
      <View style={styles.footer}>
        <AppText>Last update: {update}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  batteryLevel: {
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  batteryLevelText: {
    fontWeight: "800",
  },
  main: {
    flexDirection: "row",
  },
  mainLeftSide: {
    flex: 2,
    paddingVertical: 10,
    alignItems: "center",
  },
  floorsContainer: {
    borderWidth: 1,
    borderColor: colors.black,
    paddingBottom: 0.1,
    width: "60%",
    minWidth: 60,
    maxWidth: 100,
  },
  mainRightSide: {
    flex: 4,
    paddingVertical: 10,
    paddingRight: 5,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4bcf87",
    marginLeft: 5,
  },
  footer: {
    paddingVertical: 5,
    alignItems: "center",
  },
});

export default HiveCard;

// const Floor = () => (
//   <View
//     style={{
//       width: "100%",
//       height: 30,
//       backgroundColor: colors.primary,
//       borderBottomWidth: 2,
//       borderBottomColor: colors.black,
//     }}
//   />
// );
