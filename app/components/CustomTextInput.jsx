import React from "react";
import { Controller } from "react-hook-form";

import { View, StyleSheet, TextInput, Image, Pressable } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const CustomTextInput = ({
  name,
  control,
  rules = {},
  secureTextEntry = false,
  setSecureTextEntry,
  showPasswordImg = false,
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
            <View style={[styles.input, styleInput, error && styles.notValid]}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.zoneInput}
                {...otherProps}
              />
              {showPasswordImg && (
                <Pressable onPress={setSecureTextEntry}>
                  <Image
                    source={require("../assets/images/eyeClosed.png")}
                    style={styles.showPasswordImg}
                    resizeMode="contain"
                  />
                </Pressable>
              )}
            </View>
            {error?.message && (
              <AppText style={styles.error}>{error.message || "Error"}</AppText>
            )}
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

    flexDirection: "row",
    alignItems: "center",
  },
  zoneInput: {
    flex: 1,
  },
  showPasswordImg: {
    width: 30,
    height: 20,
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
