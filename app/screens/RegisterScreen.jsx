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
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import register from "../api/register";
import CustomActivityIndicator from "../components/CustomActivityIndicator";

const [screenWidth, screenHeight] = useScreenDimensions();

const RegisterScreen = () => {
  const { control, handleSubmit, watch } = useForm();

  const registerApi = useApi(register.register);
  const { logIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [registerFailedError, setRegisterFailedError] = useState(null);

  const onSubmit = async (data) => {
    const userInfo = { ...data, mobileNr: "32424", city: "fier" };
    const response = await registerApi.request(userInfo);

    if (!response.ok) {
      if (response.data) setRegisterFailedError(response.data.errors.email[0]);
      else {
        setRegisterFailedError("An unexpected error occurred.");
      }
      return;
    }

    setRegisterFailedError(null);
    logIn(response.data.token);
  };

  return (
    <>
      <CustomActivityIndicator
        animating={registerApi.loading}
        color={colors.primary}
      />
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
          {registerFailedError && (
            <AppText style={defaultStyles.error}>{registerFailedError}</AppText>
          )}
          <CustomTextInput
            name={"name"}
            control={control}
            placeholder="Emri"
            rules={{ required: "Kërkohet emri" }}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <CustomTextInput
            name={"surname"}
            control={control}
            placeholder="Emri i përdoruesit"
            rules={{ required: "Kërkohet emri i përdoruesit" }}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <CustomTextInput
            name={"email"}
            control={control}
            placeholder="E-mail"
            rules={{ required: "Kërkohet email" }}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <CustomTextInput
            name="password"
            control={control}
            placeholder="Fjalëkalimi"
            rules={{ required: "Kërkohet fjalëkalimi", minLength: 7 }}
            secureTextEntry={!showPassword}
            setSecureTextEntry={() => setShowPassword(!showPassword)}
            showPasswordImg={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AppText style={styles.text}>
            Fjalëkalimi duhet të përmbajë të paktën 7 karaktere
          </AppText>
          <CustomTextInput
            name="repeatPassword"
            control={control}
            placeholder="Përsërit fjalëkalimin"
            rules={{
              required: "Kërkohet fjalëkalimi",
              validate: (val) => {
                if (watch("password") != val) {
                  return "Fjalëkalimet tuaja nuk përputhen";
                }
              },
            }}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
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
    </>
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
    marginTop: 25,
    marginBottom: 12,
  },
});

export default RegisterScreen;
