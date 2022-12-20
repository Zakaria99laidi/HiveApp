import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";

import useScreenDimensions from "../../hooks/useScreenDimensions";
import Screen from "./Screen";

const [screenWidth, screenHeight] = useScreenDimensions();

const ScreenWithBackground = ({
  children,
  showBackImg = true,
  showEditImg = false,
}) => {
  return (
    <Screen>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.backgroundImgContainer}
        imageStyle={styles.backgroundImg}
        resizeMode="cover"
      >
        <View style={styles.buttonHeaderContainer}>
          {showBackImg && (
            <Image
              source={require("../../assets/images/goBack.png")}
              style={styles.backImg}
            />
          )}
          {showEditImg && (
            <Image
              source={require("../../assets/images/pencilEdit.png")}
              style={styles.editImg}
            />
          )}
        </View>
        {children}
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  backgroundImgContainer: {
    minHeight: 0.4 * screenHeight,
  },
  backgroundImg: {
    width: screenWidth,
    height: 0.4 * screenHeight,
  },
  buttonHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  backImg: { width: 48, height: 48 },
  editImg: { width: 32, height: 32 },
});

export default ScreenWithBackground;
