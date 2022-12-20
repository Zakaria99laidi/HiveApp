import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Screen from "../components/containers/Screen";
import AppText from "../components/AppText";
import defaultStyles from "../config/defaultStyles";
import CustomTextInput from "../components/CustomTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import useScreenDimensions from "../hooks/useScreenDimensions";

const [screenWidth, screenHeight] = useScreenDimensions();

const RegisterScreen = () => {
  const { control, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => console.log(data);

  return (
    <Screen>
      <Image
        source={require("../assets/images/background.png")}
        style={styles.backgroundImg}
        resizeMode="cover"
      />
      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <AppText style={defaultStyles.title}>Krijo një llogari të re</AppText>
      </View>

      <View style={{ paddingHorizontal: 30 }}>
        <CustomTextInput
          name={"name"}
          control={control}
          placeholder="Emri"
          rules={{ required: "Kërkohet emri" }}
        />
        <CustomTextInput
          name={"username"}
          control={control}
          placeholder="Emri i përdoruesit"
          rules={{ required: "Kërkohet emri i përdoruesit" }}
        />
        <CustomTextInput
          name={"email"}
          control={control}
          placeholder="E-mail"
          rules={{ required: "Kërkohet email" }}
        />
        <CustomTextInput
          name="password"
          control={control}
          placeholder="Fjalëkalimi"
          rules={{ required: "Kërkohet fjalëkalimi" }}
          // secureTextEntry
          secureTextEntry={!showPassword}
          setSecureTextEntry={() => setShowPassword(!showPassword)}
          showPasswordImg={true}
        />
        <AppText style={styles.text}>
          Fjalëkalimi duhet të përmbajë të paktën 7 karaktere
        </AppText>
        <CustomTextInput
          name="repeatPassword"
          control={control}
          placeholder="Përsërit fjalëkalimin"
          rules={{ required: "Kërkohet fjalëkalimi" }}
          secureTextEntry={!showPassword}
        />

        <AppButton
          title={"Krijo llogarinë"}
          onPress={handleSubmit(onSubmit)}
          style={styles.SubmitButton}
        />
        <AppText style={[styles.text, { textAlign: "center" }]}>
          Duke u regjistruar në platformën tonë, ju bini dakord me të gjitha{" "}
          <AppText style={styles.link}>Kushtet</AppText> dhe{" "}
          <AppText style={styles.link}>Rregullat e privatësisë</AppText> sonë.
        </AppText>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    width: screenWidth,
    height: 0.3 * screenHeight,
    position: "absolute",
  },
  header: {
    width: screenWidth,
    height: 0.3 * screenHeight,
    alignItems: "center",
    // paddingTop: "20%",
  },
  logo: {
    marginTop: "18.5%",
    // width: "20%",
    width: 0.29 * screenWidth,
    height: "43%",
    marginBottom: 10,
  },
  text: {
    color: "#4B4B4B",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: 14,
  },
  link: {
    color: colors.dark,
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 14,
  },
  SubmitButton: {
    marginTop: 50,
    marginBottom: 25,
  },
});

export default RegisterScreen;
