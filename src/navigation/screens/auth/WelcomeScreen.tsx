import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    /* Welcome Screen Background Image */
    <ImageBackground
      source={require("../../../assets/car-bg.png")}
      className="flex-1"
    >
      <SafeAreaView>
        {/* Welcome Screen Text */}
        <Text className="text-center text-white text-[37.5px] font-bold mt-[615px]">
          Get started with Ubar
        </Text>
        <Text className="text-start text-white/70 text-[17px] font-normal leading-6 mt-[12px] ml-8">
          Experience Seamless Mobility with Ubar - Your Ultimate Ride Companion.
        </Text>

        {/* Welcome Screen Button */}
        <View className="mx-6 mt-9">
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-[#FFDA37] px-8 py-5 rounded-full"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-center text-black font-semibold text-xl">
                Continue
              </Text>
              <View className="flex-row justify-between items-center">
                <Feather name="chevron-right" size={24} color="black" />
                <Feather name="chevron-right" size={24} color="black" />
                <Feather name="chevron-right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;
