import React, { useContext } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import AppText from "../../components/AppText";

import StaticsCard from "../../components/StaticsCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import defaultStyles from "../../config/defaultStyles";
import colors from "../../config/colors";
import HiveCard from "../../components/HiveCard";
import ScreenWithBackground from "../../components/containers/ScreenWithBackground";
import { useNavigation } from "@react-navigation/native";
import routes from "../../navigation/routes";
import AuthContext from "../../auth/context";
import authStorage from "../../auth/storage";

const statics = [
  {
    value: 8,
    title: "Hives",
  },
  {
    value: "$0",
    title: "Price",
  },
  {
    value: 1,
    title: "Park",
  },
  {
    value: "$0",
    title: "Credit",
  },
];

const smartHives = [
  {
    title: "Hive 1",
    batteryLevel: 80,
    update: "2022-10-26 12:19:24",
    numFloors: 3,
    temperature_1: 28.7,
    temperature_2: 28.7,
    humidity: 95.7,
    weight: 43.5,
  },
  {
    title: "Hive 2",
    batteryLevel: 82,
    update: "2022-10-26 12:19:24",
    numFloors: 2,
    temperature_1: 26.9,
    temperature_2: 25.9,
    humidity: 98.3,
    weight: 47.1,
  },
  {
    title: "Hive 3",
    batteryLevel: 70,
    update: "2022-10-26 12:19:24",
    numFloors: 3,
    temperature_1: 28.7,
    temperature_2: 28.7,
    humidity: 95.7,
    weight: 43.5,
  },
];

const SmartHivesScreen = () => {
  const { navigate } = useNavigation();

  const { authToken, setAuthToken } = useContext(AuthContext);
  return (
    <ScreenWithBackground>
      <ImageBackground
        source={require("../../assets/images/background_2.png")}
        style={styles.backgroundImgContainer}
        imageStyle={styles.backgroundImg}
        resizeMode="cover"
      >
        <View style={styles.titleContainer}>
          <AppButton
            style={styles.plusButton}
            iconComponent={<MaterialCommunityIcons name="plus" size={25} />}
            onPress={() => navigate(routes.Add_SMART_HIVES)}
          />
          <AppText style={[defaultStyles.title, styles.title]}>Hives</AppText>
        </View>
        <View style={styles.staticsContainer}>
          {statics.map((item) => (
            <StaticsCard
              key={item.title}
              width="22.5%"
              title={item.title}
              value={item.value}
            />
          ))}
        </View>
      </ImageBackground>
      {/* TODO: delete this ------------------------------------------------------------------------ */}
      {/* <AppText
        style={{
          marginTop: 40,
          marginHorizontal: 20,
          backgroundColor: "#EEE",
          color: "#0000FA",
          fontSize: 18,
          lineHeight: 30,
          letterSpacing: 1,
          padding: 10,
        }}
      >
        {authToken}
      </AppText>
      <AppButton
        title={"logout"}
        onPress={() => {
          setAuthToken(null);
          authStorage.removeToken();
        }}
        style={{ marginTop: 10, marginHorizontal: 20 }}
      /> */}
      {/* ------------------------------------------------------------------------------------------ */}
      <View style={styles.hivesListContainer}>
        {smartHives.map((smartHive) => (
          <HiveCard
            key={smartHive.title}
            title={smartHive.title}
            batteryLevel={smartHive.batteryLevel}
            update={smartHive.update}
            numFloors={smartHive.numFloors}
            temperature_1={smartHive.temperature_1}
            temperature_2={smartHive.temperature_2}
            humidity={smartHive.humidity}
            weight={smartHive.weight}
          />
        ))}
      </View>
    </ScreenWithBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImgContainer: {
    height: 200,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  backgroundImg: {
    borderRadius: 10,
  },
  titleContainer: {
    padding: 20,
    paddingLeft: 30,
  },
  plusButton: {
    width: 35,
    height: 35,
    backgroundColor: colors.white,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 7,
    alignSelf: "flex-end",
  },
  title: {
    color: colors.dark,
  },
  staticsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: "10%",
  },
  hivesListContainer: {
    flex: 1,
    marginTop: "10%",
    padding: 10,
  },
});
export default SmartHivesScreen;
