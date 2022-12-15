import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";

const Screen = ({ children, style, ...otherProps }) => {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView
        style={[styles.scrollView, style]}
        showsVerticalScrollIndicator={false}
        {...otherProps}
      >
        {children}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default Screen;
