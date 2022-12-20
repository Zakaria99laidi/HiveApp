import { View } from "react-native";
import React from "react";

import colors from "../config/colors";

const LineSeparator = ({
  color = "primary",
  width = "100%",
  thickness = 2,
  style,
}) => {
  return (
    <View
      style={[
        {
          width: width,
          borderWidth: thickness,
          borderColor: colors[color],
        },
        style,
      ]}
    />
  );
};

export default LineSeparator;
