import React, { useContext, useEffect } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
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
import smartHivesApi from "../../api/smartHives";
import useApi from "../../hooks/useApi";

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

const SmartHivesScreen = () => {
  const { navigate } = useNavigation();

  const {
    data: smartHives,
    error,
    loading,
    request: loadSmartHives,
  } = useApi(smartHivesApi.getSmartHives);

  useEffect(() => {
    loadSmartHives();
  }, []);

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
      <View style={styles.hivesListContainer}>
        {loading ? (
          <ActivityIndicator
            animating={loading}
            color={colors.primary}
            size="large"
          />
        ) : error ? (
          <>
            <AppText style={defaultStyles.error}>
              Couldn't retrieve the smart hives.
            </AppText>
            <AppButton
              title={"try again"}
              onPress={loadSmartHives}
              style={{ marginTop: 10, marginHorizontal: 20 }}
            />
          </>
        ) : smartHives.length ? (
          smartHives.map((smartHive) => (
            <HiveCard
              key={smartHive.id}
              title={smartHive.name}
              batteryLevel={smartHive.battery}
              update={smartHive.updated_at.slice(0, 19).replace("T", " ")}
              numFloors={smartHive.floors}
              temperature_1={smartHive.t1.toFixed(1)}
              temperature_2={smartHive.t2.toFixed(1)}
              humidity={smartHive.h.toFixed(1)}
              weight={smartHive.kg.toFixed(1)}
            />
          ))
        ) : (
          <AppText style={defaultStyles.error}>No Data Found</AppText>
        )}
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
