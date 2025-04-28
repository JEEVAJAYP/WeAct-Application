import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className=" flex-1 justify-center items-center bg-[#36b4b2]">
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
    </SafeAreaView>
  );
}
