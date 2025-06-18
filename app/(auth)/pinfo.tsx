import { View, Text, TextInput } from "react-native";
import React from "react";
import BackTo from "@/components/BackTo";
import Button from "@/components/Button";

const pinfo = () => {
  return (
    <View className="w-full flex-1 justify-between bg-white">
      <View className="gap-3 px-4">
        <View className=" flex-row">
          <BackTo />
          <Text className="text-2xl font-semibold ml-4">Proffesional Info</Text>
        </View>
        <Text className=" text-xl font-semibold">Adhaar no</Text>
        <TextInput
          className=" bg-slategrey rounded-xl px-4"
          placeholder="Please enter your aadhar no"
        />
        <Text className=" text-xl font-semibold">PAN NO</Text>
        <TextInput
          className=" bg-slategrey rounded-xl px-4"
          placeholder="Please enter your PAN no"
        />
        <Text className=" text-xl font-semibold">
          WhatsApp Business Account
        </Text>
        <TextInput
          className=" bg-slategrey rounded-xl px-4"
          placeholder="Please enter your WhatsApp no"
        />
        <Text className=" text-xl font-semibold">Instagram Account</Text>
        <TextInput
          className=" bg-slategrey rounded-xl px-4"
          placeholder="Please enter Instagram Account"
        />
        <Text className=" text-xl font-semibold">You-Tube Account</Text>
        <TextInput
          className=" bg-slategrey rounded-xl px-4"
          placeholder="Please enter your Youtube"
        />
      </View>
      <Button title="Update Info" className=" absolute bottom-0" />
    </View>
  );
};

export default pinfo;
