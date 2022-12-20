import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";

import ScreenWithBackground from "../components/containers/ScreenWithBackground";
import AppText from "../components/AppText";
import defaultStyles from "../config/defaultStyles";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import LineSeparator from "../components/LineSeparator";
import CustomTextInput from "../components/CustomTextInput";
import CustomSelectList from "../components/CustomSelectList";
import useScreenDimensions from "../hooks/useScreenDimensions";
import Floor from "../components/Floor";

const [screenWidth, screenHeight] = useScreenDimensions();

const devices = [
  { key: 1, value: "device 1" },
  { key: 2, value: "device 2" },
  { key: 3, value: "device 3" },
];

const parks = [
  { key: 1, value: "park 1" },
  { key: 2, value: "park 2" },
  { key: 3, value: "park 3" },
  { key: 4, value: "park 4" },
  { key: 5, value: "park 5" },
];

const AddSmartHivesScreen = () => {
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      floors: 1,
    },
  });

  function incrementFloors() {
    setValue("floors", getValues("floors") + 1);
  }

  function decrementFloors() {
    if (getValues("floors") > 1) setValue("floors", getValues("floors") - 1);
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScreenWithBackground>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <AppText style={defaultStyles.darkTitle}>Add Hive</AppText>
          <AppText style={styles.subtitle}>
            Please add a device before registering a hives!
          </AppText>
        </View>

        <LineSeparator />

        <AppButton
          style={styles.insufficient}
          title="Insufficient funds!"
          styleText={styles.insufficientText}
          isDisabled={true}
        />

        <View style={styles.formContainer}>
          <CustomTextInput
            name={"name"}
            control={control}
            label="Name"
            rules={{ required: true }}
            style={[styles.inputContainer, styles.formItem]}
            styleLabel={styles.label}
            styleInput={styles.input}
          />

          <Controller
            name="floors"
            control={control}
            render={({ field: { value } }) => (
              <View style={[styles.inputContainer, styles.formItem]}>
                <AppText style={styles.label}>Floors</AppText>
                <AntDesign
                  name="minussquare"
                  size={35}
                  color={colors.primary}
                  onPress={decrementFloors}
                />
                <AppText style={styles.floorsCount}>{value}</AppText>
                <AntDesign
                  name="plussquare"
                  size={35}
                  color={colors.primary}
                  onPress={incrementFloors}
                />
              </View>
            )}
          />

          <CustomSelectList
            name="device"
            control={control}
            rules={{ required: true }}
            label="Device"
            placeholder="Select device"
            data={devices}
            style={styles.formItem}
            styleLabel={styles.label}
            boxStyles={styles.selectBoxStyles}
            dropdownStyles={styles.selectBoxStyles}
            searchicon={<View />}
          />
          <CustomSelectList
            name="park"
            control={control}
            rules={{ required: true }}
            label="Park"
            placeholder="Select park"
            data={parks}
            style={styles.formItem}
            styleLabel={styles.label}
            boxStyles={styles.selectBoxStyles}
            dropdownStyles={styles.selectBoxStyles}
            searchicon={<View />}
          />

          <Controller
            name="floors"
            control={control}
            render={({ field: { value } }) => (
              <View style={[styles.floorsBoxes, styles.formItem]}>
                {Array(value)
                  .fill(1)
                  .map((item, index) => (
                    <Floor key={index} width={80} />
                  ))}
              </View>
            )}
          />

          <AppButton
            title="Save"
            style={styles.submitButton}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </ScreenWithBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    marginHorizontal: 10,
    minHeight: screenHeight * 0.87,
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  subtitle: {
    color: colors.grey,
    marginTop: 10,
  },
  insufficient: {
    marginVertical: 15,
    marginHorizontal: 10,
    backgroundColor: colors.lightRed,
    borderWidth: 1,
    borderColor: colors.red,
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  insufficientText: {
    color: colors.red,
    fontSize: 18,
  },

  formContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
  },
  formItem: {
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    width: "25%",
    minWidth: 50,
    maxWidth: 80,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: "70%",
    maxWidth: 250,
    minWidth: 120,
  },
  floorsCount: {
    backgroundColor: colors.lightYellow,
    height: "80%",
    width: "30%",
    maxWidth: 130,
    minWidth: 60,
    marginHorizontal: -2,
    textAlignVertical: "center",
    textAlign: "center",
  },
  selectBoxStyles: {
    borderColor: colors.lightGrey,
    width: 0.5 * screenWidth,
    maxWidth: 250,
    minWidth: 150,
  },
  floorsBoxes: {
    paddingLeft: "25%",
  },
  submitButton: {
    borderRadius: 50,
    paddingVertical: 5,
    width: "60%",
    minWidth: 150,
    maxWidth: 250,
    alignSelf: "center",
  },
});

export default AddSmartHivesScreen;
