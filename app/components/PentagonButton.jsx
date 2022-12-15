import { TouchableWithoutFeedback, Image, ImageBackground } from "react-native";

import React from "react";

const PentagonButton = ({
  ImgBackgroundSrc = require("../assets/images/hexagon.png"),
  imgIconSrc = require("../assets/images/coupon.png"),
  size = 125,
  onPress,
  style,
  styleIcon,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ImageBackground
        source={ImgBackgroundSrc}
        style={[
          {
            width: size,
            height: size,
            justifyContent: "center",
            alignItems: "center",
          },
          style,
        ]}
        resizeMode="contain"
      >
        <Image
          source={imgIconSrc}
          style={[
            {
              width: size * 0.4,
              height: size * 0.3,
            },
            styleIcon,
          ]}
          resizeMode="contain"
        />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default PentagonButton;
