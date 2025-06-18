import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const BackTo = () => {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="chevron-back-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackTo;
