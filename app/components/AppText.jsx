import React from "react";

import { Text, StyleSheet } from "react-native";
import colors from "../config/colors.js";
import defaultStyles from "../config/defaultStyles";

export default AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};
