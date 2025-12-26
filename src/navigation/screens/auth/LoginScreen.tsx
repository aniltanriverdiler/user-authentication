import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import CheckBox from "../../../components/common/CheckBox";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [isSecure, setIsSecure] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Login Screen Text */}
      <Text className="text-white text-center text-[40px] font-bold mt-16 mx-6">
        Welcome back to Ubar
      </Text>
      <Text className="text-neutral-400 text-center text-[16px] leading-6 font-bold mt-4 mx-6">
        Access Your Rides, Track Trips, Manage Payments, And Travel Anywhere
        With Ease.
      </Text>

      {/* Email Input */}
      <Text className="text-neutral-400 text-left text-[16px] font-semibold mt-24 ml-6 mb-1">
        Email
      </Text>
      <TextInput
        className="bg-[#111111] text-neutral-400 border rounded-full p-6 mt-2 mx-4"
        placeholder="tanriverdileranil@gmail.com"
        placeholderTextColor="#a3a3a3"
      />

      {/* Password Input */}
      <Text className="text-neutral-400 text-left text-[16px] font-semibold mt-6 ml-6 mb-1">
        Password
      </Text>
      <View className="flex-row items-center bg-[#111111] border rounded-full px-5 py-3 mt-2 mx-4">
        <TextInput
          className="flex-1 text-neutral-400"
          placeholder="********"
          secureTextEntry={isSecure}
          placeholderTextColor="#a3a3a3"
        />
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <Feather name={isSecure ? "eye" : "eye-off"} size={22} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Checkbox and Forgot Password */}
      <View className="flex-row items-center justify-between mt-6 mx-6">
        <CheckBox />
        <Text className="text-yellow-500 font-semibold">Forgot Password?</Text>
      </View>

      {/* Button Text Section */}
      <View className="flex-row items-center gap-4 my-6 mx-7">
        <View className="h-[1px] flex-1 bg-neutral-500"></View>
        <Text className="text-neutral-400 text-lg">Or</Text>
        <View className="h-[1px] flex-1 bg-neutral-500"></View>
      </View>

      {/* Google Login Button */}
      <TouchableOpacity className="bg-[#FFDA37] px-8 py-4 rounded-full">
        <View className="flex-row justify-center items-center gap-2">
          <FontAwesome5
            className="border border-black rounded-full px-2.5 py-2"
            name="google"
            size={20}
            color="black"
          />
          <Text className="text-black font-medium text-lg">
            Continue With Google
          </Text>
        </View>
      </TouchableOpacity>

      {/* Apple Login Button */}
      <TouchableOpacity className="bg-[#FFDA37] px-8 py-4 rounded-full mt-5">
        <View className="flex-row justify-center items-center gap-2">
          <FontAwesome5
            className="border border-black rounded-full px-3 py-2"
            name="apple"
            size={20}
            color="black"
          />
          <Text className="text-black font-medium text-lg">
            Continue With Apple
          </Text>
        </View>
      </TouchableOpacity>

      {/* Don't have an account? */}
      <View className="flex-row justify-center items-center mt-5 gap-2">
        <Text className="text-neutral-400 text-lg">Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-[#FFDA37] font-semibold text-lg">Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
