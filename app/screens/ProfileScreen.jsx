import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";

import useScreenDimensions from "../hooks/useScreenDimensions";
import PentagonButton from "../components/PentagonButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import ScreenWithBackground from "../components/containers/ScreenWithBackground";
import useAuth from "../auth/useAuth";

const [screenWidth, _] = useScreenDimensions();

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
  const { logOut } = useAuth();
  return (
    <ScreenWithBackground showEditImg={true}>
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
      <AppButton
        title={"logout"}
        onPress={() => logOut()}
        style={{ marginVertical: 10, marginHorizontal: 20 }}
      />
    </ScreenWithBackground>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    alignItems: "center",
    marginVertical: "8%",
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
    color: colors.black,
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
