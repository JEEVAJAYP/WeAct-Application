import { View, Text } from "react-native";
import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

const welcome = () => {
  return (
    <View>
      <View className="flex-1">
        <Svg height="250" width="100%">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#00bcd4" stopOpacity="1" />
              <Stop offset="1" stopColor="#8bc34a" stopOpacity="1" />
            </LinearGradient>
          </Defs>

          <Path d="M10 10 L110 10 L110 110 L10 110 Z" fill="url(#grad)" />
        </Svg>
      </View>
    </View>
  );
};

export default welcome;
