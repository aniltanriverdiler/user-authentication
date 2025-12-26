import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <Text className="text-white text-center text-[37.5px] font-bold mt-12 mx-20">Welcome back to Ubar</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
