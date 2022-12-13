import React from "react";
import { Controller } from "react-hook-form";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const CustomTextInput = ({
  name,
  control,
  rules = {},
  secureTextEntry = false,
  placeholder,
  style,
  ...otherProps
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <View style={[styles.container, error && styles.notValid, style]}>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              {...otherProps}
            />
          </View>
          {/* <AppText style={{ color: "red" }}>{error.message || "Error"}</AppText> */}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    width: "100%",
    borderRadius: 6,

    paddingHorizontal: 16,
    paddingVertical: 12,

    marginVertical: 5,
  },
  notValid: {
    borderWidth: 1,
    borderColor: "red",
  },
  input: {},
});
export default CustomTextInput;
