import React from "react";
import { useForm } from "react-hook-form";
import { View, Image, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import CustomTextInput from "../components/CustomTextInput";
import defaultStyles from "../config/defaultStyles";
import Screen from "../components/containers/Screen";
import colors from "../config/colors";

const LoginScreen = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

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
          <AppText style={styles.link}>Krijo një llogari</AppText>
        </AppText>

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
          secureTextEntry
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
    width: "100%",
    height: "30%",
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
