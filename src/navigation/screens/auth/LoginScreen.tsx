import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-red-500">LoginScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
