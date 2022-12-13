import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";

export default AppButton = ({
  title,
  color = "primary",
  width = "100%",
  onPress,
  style,
  styleText,
  imageSource,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.buttonContainer,
        { backgroundColor: colors[color], width: width },
        style,
      ]}
    >
      <AppText style={[defaultStyles.title, styles.text, styleText]}>
        {title}
      </AppText>
      {imageSource && (
        <Image
          source={imageSource}
          style={{ width: 10, height: 10, marginLeft: 8 }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    // fontWeight: "600",
  },
});
