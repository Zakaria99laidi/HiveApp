import { Dimensions } from "react-native";

export default function useScreenDimensions() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  return [screenWidth, screenHeight];
}
