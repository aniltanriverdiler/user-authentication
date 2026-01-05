import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import CheckBox from "../../../components/common/CheckBox";
import { useForm, Controller } from "react-hook-form";
import { useAuthStore } from "../../../store/auth";

type FormData = {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
};

const RegisterScreen = () => {
  const register = useAuthStore((state) => state.register);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    register({ email: data.email, fullName: data.fullName });
  };

  const [isSecure, setIsSecure] = useState(true);
  const [isConfirmSecure, setIsConfirmSecure] = useState(true);

  const password = watch("password");

  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Register Screen Text */}
      <Text
        style={{ fontSize: 24 }}
        className="text-white text-center font-bold mt-8 mx-6"
      >
        Create Your Ubar Account
      </Text>

      {/* Email Input */}
      <Text className="text-neutral-400 text-left text-[16px] font-semibold mt-8 ml-6 mb-1">
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
        name="email"
      />
      {errors.email && (
        <Text className="text-red-500 text-sm ml-6 mt-1">
          Email is required
        </Text>
      )}

      {/* Full Name Input */}
      <Text className="text-neutral-400 text-left text-[16px] font-semibold mt-8 ml-6 mb-1">
        Full Name
      </Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="bg-[#111111] text-neutral-400 border rounded-full p-6 mt-2 mx-4"
            placeholder="Anil Tanriverdiler"
            placeholderTextColor="#a3a3a3"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullName"
      />
      {errors.fullName && (
        <Text className="text-red-500 text-sm ml-6 mt-1">
          Full Name is required
        </Text>
      )}

      {/* Password Input */}
      <Text className="text-neutral-400 text-left text-[16px] font-semibold mt-6 ml-6 mb-1">
        Password
      </Text>
      <View className="flex-row items-center bg-[#111111] border rounded-full px-5 py-3 mt-2 mx-4">
        <Controller
          control={control}
          rules={{ required: true, minLength: 6 }}
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
          name="password"
        />
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <Feather name={isSecure ? "eye" : "eye-off"} size={22} color="gray" />
        </TouchableOpacity>
      </View>
      {errors.password && (
        <Text className="text-red-500 text-sm ml-6 mt-1">
          {errors.password.type === "required"
            ? "Password is required"
            : "Password must be at least 6 characters long"}
        </Text>
      )}

      {/* Confirm Password Input */}
      <Text className="text-neutral-400 text-left text-[16px] font-semibold mt-6 ml-6 mb-1">
        Confirm Password
      </Text>
      <View className="flex-row items-center bg-[#111111] border rounded-full px-5 py-3 mt-2 mx-4">
        <Controller
          control={control}
          rules={{
            required: true,
            validate: (value) => value === password || "Passwords do not match",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="flex-1 text-neutral-400"
              placeholder="********"
              secureTextEntry={isConfirmSecure}
              placeholderTextColor="#a3a3a3"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirmPassword"
        />
        <TouchableOpacity onPress={() => setIsConfirmSecure(!isConfirmSecure)}>
          <Feather
            name={isConfirmSecure ? "eye" : "eye-off"}
            size={22}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {errors.confirmPassword && (
        <Text className="text-red-500 text-sm ml-6 mt-1">
          {errors.confirmPassword.message || "Confirm Password is required"}
        </Text>
      )}

      {/* Checkbox and Terms of Service */}
      <View className="flex-row items-center mt-6 mx-6 gap-2">
        <CheckBox />
        <Text className="text-neutral-400 font-semibold">Agree with</Text>
        <Text className="text-yellow-500 underline font-semibold">
          Terms & Conditions
        </Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-[#FFDA37] px-8 py-4 rounded-full mt-5"
      >
        <Text className="text-black text-center font-medium text-lg">
          Sign Up
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
        <Text className="text-neutral-400 text-lg">
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-[#FFDA37] font-semibold text-lg">Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
