import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import CheckBox from "../../../components/common/CheckBox";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  Email: string;
  Password: string;
};

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  const onSubmit = (data: FormData) => console.log(data);

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
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="bg-[#111111] text-neutral-400 border rounded-full p-6 mt-2 mx-4"
            placeholder="tanriverdileranil@gmail.com"
            placeholderTextColor="#a3a3a3"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="Email"
      />
      {errors.Email && (
        <Text className="text-red-500 text-sm ml-6 mt-1">
          Email is required
        </Text>
      )}

      {/* Password Input */}
      <Text className="text-neutral-400 text-left text-[16px] font-semibold mt-6 ml-6 mb-1">
        Password
      </Text>
      <View className="flex-row items-center bg-[#111111] border rounded-full px-5 py-3 mt-2 mx-4">
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="flex-1 text-neutral-400"
              placeholder="********"
              secureTextEntry={isSecure}
              placeholderTextColor="#a3a3a3"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="Password"
        />
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <Feather name={isSecure ? "eye" : "eye-off"} size={22} color="gray" />
        </TouchableOpacity>
      </View>
      {errors.Password && (
        <Text className="text-red-500 text-sm ml-6 mt-1">
          Password is required
        </Text>
      )}

      {/* Checkbox and Forgot Password */}
      <View className="flex-row items-center mt-6 mx-6 gap-2">
        <CheckBox />
        <Text className="text-neutral-400 font-semibold">Remember Me</Text>
        <Text className="text-yellow-500 font-semibold ml-auto">
          Forgot Password?
        </Text>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-[#FFDA37] px-8 py-4 rounded-full mt-5"
      >
        <Text className="text-black text-center font-medium text-lg">
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Button Text Section */}
      <View className="flex-row items-center gap-4 my-5 mx-7">
        <View className="h-[1px] flex-1 bg-neutral-500"></View>
        <Text className="text-neutral-400 text-lg">Or</Text>
        <View className="h-[1px] flex-1 bg-neutral-500"></View>
      </View>

      <View className="flex-row justify-center items-center gap-5">
        {/* Google Login Button */}
        <TouchableOpacity className="border border-[#FFDA37] bg-[#FFDA37] px-2.5 py-2 rounded-full">
          <FontAwesome5 name="google" size={24} color="black" />
        </TouchableOpacity>

        {/* Apple Login Button */}
        <TouchableOpacity className="border border-[#FFDA37] bg-[#FFDA37] px-3 py-2 rounded-full">
          <FontAwesome5 name="apple" size={24} color="black" />
        </TouchableOpacity>

        {/* Facebook Login Button */}
        <TouchableOpacity className="border border-[#FFDA37] bg-[#FFDA37] px-2.5 py-2 rounded-full">
          <FontAwesome5 name="facebook" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Don't have an account? */}
      <View className="flex-row justify-center items-center mt-7 gap-2">
        <Text className="text-neutral-400 text-lg">Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-[#FFDA37] font-semibold text-lg">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
