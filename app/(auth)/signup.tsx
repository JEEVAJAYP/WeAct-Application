import { useState } from "react";
import {
  SafeAreaView,
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

const signup = () => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <View className="">
        <Text className=" text-3xl ">Register</Text>
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
            <Text className=" text-2xl ">New Password</Text>
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
            <Text className=" text-2xl ">Full Name</Text>
            <View className=" flex-row bg-lightgrey rounded-xl px-4 justify-between items-center">
              <TextInput
                placeholder="Please enter Full Name"
                // value={email}
                // onChangeText={setEmail}
                // keyboardType="email-address"
              />
              <MaterialCommunityIcons
                name="account-outline"
                size={24}
                color={"#949191"}
              />
            </View>
            <Text className=" text-2xl ">Phone no</Text>
            <View className=" flex-row bg-lightgrey rounded-xl px-4 justify-between items-center">
              <TextInput
                placeholder="Please enter your phone no"
                // value={email}
                // onChangeText={setEmail}
                // keyboardType="email-address"
              />
              <MaterialCommunityIcons
                name="phone"
                size={24}
                color={"#949191"}
              />
            </View>
          </View>
        </View>
        <Button
          title="Sign up"
          onPress={() => console.log("Sign Up pressed")}
        />
      </View>
      <View className="items-center justify-center flex-row gap-2 py-4">
        <Text>Already have an account?</Text>
        <Link href="/login">
          <Text className=" text-lightblue">Go to login</Text>
        </Link>
      </View>
    </View>
  );
};

export default signup;
