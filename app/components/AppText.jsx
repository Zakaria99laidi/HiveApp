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

// const styles = StyleSheet.create({
//   text: {
//     // fontFamily: "Inter-Regular",
//     color: colors.black,
//     fontSize: 30,
//     fontWeight: "normal",
//     lineHeight: 36,
//   },
// });
