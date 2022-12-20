import React from "react";
import { Controller } from "react-hook-form";

import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const CustomTextInput = ({
  name,
  control,
  rules = {},
  secureTextEntry = false,
  placeholder,
  label,
  style,
  styleInput,
  styleLabel,
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
          <View style={[styles.container, style]}>
            {label && <AppText style={styleLabel}>Name</AppText>}
            <TextInput
              style={[styles.input, styleInput, error && styles.notValid]}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              {...otherProps}
            />
            {/* {error && (
              <AppText style={styles.error}>{error.message || "Error"}</AppText>
            )} */}
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  input: {
    backgroundColor: colors.whiteSmoke,
    width: "100%",
    borderRadius: 6,

    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  notValid: {
    borderWidth: 1,
    borderColor: "red",
  },
  error: {
    color: "red",
    marginTop: 5,
  },
});
export default CustomTextInput;
