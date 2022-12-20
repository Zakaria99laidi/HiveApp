import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { SelectList } from "react-native-dropdown-select-list";
import AppText from "./AppText";
import colors from "../config/colors";

const CustomSelectList = ({
  name,
  control,
  rules = {},
  data,
  placeholder,
  label,
  style,
  styleLabel,
  boxStyles,
  inputStyles,
  ...otherProps
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={[styles.container, style]}>
          {label && (
            <AppText style={[styles.label, styleLabel]}>{label}</AppText>
          )}
          <SelectList
            data={data}
            setSelected={onChange}
            placeholder={placeholder}
            boxStyles={[boxStyles, error && styles.notValid]}
            inputStyles={[!value && { color: colors.grey }, inputStyles]}
            {...otherProps}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: "row",
  },
  notValid: {
    borderWidth: 1,
    borderColor: "red",
  },
  label: {
    paddingTop: 14,
  },
});

export default CustomSelectList;
