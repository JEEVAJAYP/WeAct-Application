import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Button from "@/components/Button";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login() {
  const [secureText, setSecureText] = useState(true);

  return (
    <View className=" flex-1 items-center justify-center">
      <View className=" py-5">
        <Text className=" text-3xl ">Login</Text>
      </View>
      <View className=" flex w-full">
        <View className=" px-4 py-6">
          <View className=" flex-col gap-3">
            <Text className=" text-2xl ">Email-id</Text>
            <View className=" flex-row bg-lightgrey rounded-xl px-4 justify-between items-center">
              <TextInput
                placeholder="Please enter Username Or Mail-id"
                // value={email}
                // onChangeText={setEmail}
                // keyboardType="email-address"
                // autoCapitalize="none"
              />
              <MaterialCommunityIcons
                name="account-outline"
                size={24}
                color={"#949191"}
              />
            </View>
            <Text className=" text-2xl ">Password</Text>
            <View className=" flex-row bg-lightgrey rounded-xl px-4 justify-between items-center">
              <TextInput
                placeholder="Please enter the password"
                secureTextEntry
              />
              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                {secureText ? (
                  <Ionicons name="eye-outline" size={24} color={"#949191"} />
                ) : (
                  <Ionicons
                    name="eye-off-outline"
                    size={24}
                    color={"#949191"}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          title="Login"
          onPress={() => console.log("Login pressed")}
          className="bg-primary" // Optional: Customize the className if needed
        />
      </View>
      <View className="py-4">
        <TouchableOpacity onPress={() => console.log("Forget Password")}>
          <Text className=" text-lightblue">Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <View className="items-center justify-center flex-row gap-2 py-4">
        <Text>Dont't have an account?</Text>
        <Link href="/signup">
          <Text className=" text-lightblue">Sign Up</Text>
        </Link>
      </View>
    </View>
  );
}
