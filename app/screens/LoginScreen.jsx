import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { View, Image, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import CustomTextInput from "../components/CustomTextInput";
import defaultStyles from "../config/defaultStyles";
import Screen from "../components/containers/Screen";
import colors from "../config/colors";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigation/routes";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const [screenWidth, screenHeight] = useScreenDimensions();

const LoginScreen = () => {
  const { navigate } = useNavigation();
  const { control, handleSubmit } = useForm();

  const { logIn } = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const response = await authApi.login(data.username, data.password);
    if (!response.ok) return setLoginFailed(true);

    setLoginFailed(false);
    logIn(response.data.token);
  };

  return (
    <Screen>
      <Image
        source={require("../assets/images/background.png")}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <AppText style={defaultStyles.title}>Mirëserdhe</AppText>
        <AppText style={styles.registerText}>
          Nëse je i/e re /{" "}
          <AppText
            style={styles.link}
            onPress={() => navigate(routes.REGISTER)}
          >
            Krijo një llogari
          </AppText>
        </AppText>

        {loginFailed && (
          <AppText style={{ color: "red" }}>
            Invalid username and/or password
          </AppText>
        )}

        <CustomTextInput
          control={control}
          name="username"
          rules={{ required: "Kërkohet emri i përdoruesit" }}
          placeholder="Emri i përdoruesit"
          style={styles.input}
        />

        <CustomTextInput
          control={control}
          name="password"
          rules={{ required: "Kërkohet fjalëkalimi" }}
          placeholder="Fjalëkalimi"
          secureTextEntry={!showPassword}
          setSecureTextEntry={() => setShowPassword(!showPassword)}
          showPasswordImg={true}
        />
        <AppText style={styles.forgotPasswordText}>
          Ke harruar fjalkalimin? /{" "}
          <AppText style={styles.link}>Ndryshoje</AppText>
        </AppText>
        <AppButton
          title={"Hyr"}
          onPress={handleSubmit(onSubmit)}
          style={styles.SubmitButton}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  img: {
    width: screenWidth,
    height: 0.3 * screenHeight,
  },
  registerText: {
    marginBottom: 30,
    color: colors.grey,
  },
  link: {
    color: colors.dark,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 15,
  },
  forgotPasswordText: {
    marginBottom: 30,
    color: colors.dark,
  },
  SubmitButton: {
    marginTop: 30,
  },
});

export default LoginScreen;
