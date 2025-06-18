import Button from "@/components/Button";
import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackTo from "@/components/BackTo";
import Svg, { Path, LinearGradient, Stop, Defs } from "react-native-svg";

export default function Index() {
  return (
    <View className=" flex-1 items-center w-full bg-primary justify-center">
      <Text className=" text-white text-2xl py-5">
        Welcome to WeAct Application
      </Text>
      <Text className="text-white  text-lg px-5 py-6 text-center">
        Wr're glad to have onborder with us.We hope you enjoy the learning
        process and explore your passion further
      </Text>
      <View className=" w-full px-5">
        <Link
          href="/(auth)/signup"
          className=" p-5 mt-5 text-center text-xl bg-white rounded-full"
        >
          Get Started
        </Link>
      </View>
    </View>
  );
}
