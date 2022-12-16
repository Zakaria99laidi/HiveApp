import React from "react";
import { View } from "react-native";
import colors from "../config/colors";

const Floor = ({ width = "100%", style, ...otherProps }) => {
  return (
    <View
      style={[
        {
          width: width,
          height: 30,
          backgroundColor: colors.primary,
          borderBottomWidth: 2,
          borderBottomColor: colors.black,
        },
        style,
      ]}
      {...otherProps}
    />
  );
};

export default Floor;
