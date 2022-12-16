import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";

import Screen from "../components/containers/Screen";
import useScreenDimensions from "../hooks/useScreenDimensions";
import PentagonButton from "../components/PentagonButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";

const [screenWidth, screenHeight] = useScreenDimensions();

const icons = [
  {
    ImgBackground: require("../assets/images/hexagon.png"),
    ImgIcon: require("../assets/images/heart.png"),
    label: "Produktet\ne preferuara",
  },
  {
    ImgBackground: require("../assets/images/yellowHexagon.png"),
    ImgIcon: require("../assets/images/order.png"),
    label: " Historiku\ni porosive",
  },
  {
    ImgBackground: require("../assets/images/hexagon.png"),
    ImgIcon: require("../assets/images/following.png"),
    label: "Duke ndjekur",
  },
  {
    ImgBackground: require("../assets/images/hexagon.png"),
    ImgIcon: require("../assets/images/coupon.png"),
    label: "Kupona",
  },
];

const ProfileScreen = () => {
  return (
    <Screen>
      <ImageBackground
        source={require("../assets/images/background.png")}
        imageStyle={styles.backgroundImg}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <View style={styles.buttonHeaderContainer}>
            <Image
              source={require("../assets/images/goBack.png")}
              style={styles.backImg}
            />
            <Image
              source={require("../assets/images/pencilEdit.png")}
              style={styles.editImg}
            />
          </View>

          <View style={styles.userContainer}>
            <Image
              source={require("../assets/images/photo.png")}
              style={styles.userImg}
              resizeMode="contain"
            />
            <AppText style={[defaultStyles.title, styles.userName]}>
              User name
            </AppText>
            <AppText>@username2022</AppText>
          </View>
        </View>

        <View style={styles.iconsContainer}>
          {icons.map((icon) => (
            <View key={icon.label} style={styles.icon}>
              <PentagonButton
                ImgBackgroundSrc={icon.ImgBackground}
                imgIconSrc={icon.ImgIcon}
              />
              <AppText style={styles.label}>{icon.label}</AppText>
            </View>
          ))}
        </View>

        <ImageBackground
          source={require("../assets/images/advertisingSpace.png")}
          style={styles.advertisingImg}
          resizeMode="contain"
        >
          <AppText style={styles.advertisingText}>HAPËSIRË REKLAMIMI</AppText>
          <Image
            source={require("../assets/images/Bee.png")}
            style={{
              width: 50,
              height: 50,
            }}
            resizeMode="contain"
          />
        </ImageBackground>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    width: screenWidth,
    height: 0.4 * screenHeight,
  },
  header: {
    width: screenWidth,
    height: 0.4 * screenHeight,
    alignItems: "center",
  },
  buttonHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  backImg: { width: 48, height: 48 },
  editImg: { width: 32, height: 32 },
  userContainer: {
    alignItems: "center",
    marginTop: "8%",
  },
  userImg: {
    width: 100,
    height: 100,
    marginRight: 2,
    borderRadius: 50,
  },
  userName: {
    fontWeight: "800",
    marginVertical: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  icon: {
    width: "50%",
    alignItems: "center",
    padding: 10,
  },
  label: {
    textAlign: "center",
    marginTop: 7,
    color: "#000",
    fontWeight: "500",
  },
  advertisingImg: {
    width: screenWidth * 0.95,
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "8%",
    flexDirection: "row",
    marginVertical: 15,
  },
  advertisingText: {
    color: colors.white,
    fontWeight: "600",
  },
});

export default ProfileScreen;
