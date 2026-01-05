import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAuthStore } from "../../store/auth";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  // Service buttons data with icon components
  const serviceButtons = [
    {
      id: 1,
      title: "Ride",
      icon: <FontAwesome5 name="car" size={30} color="#FFDA37" />,
    },
    {
      id: 2,
      title: "Package",
      icon: <Feather name="package" size={30} color="#FFDA37" />,
    },
    {
      id: 3,
      title: "Rentals",
      icon: <FontAwesome5 name="car" size={30} color="#FFDA37" />,
    },
    {
      id: 4,
      title: "Intercity",
      icon: <FontAwesome5 name="car" size={30} color="#FFDA37" />,
    },
  ];

  // Recent rides data in array format
  const recentRides = [
    {
      id: 1,
      route: "Home to Office , ",
      distance: "2.5km",
      date: "Jan 13, 2023",
      price: "$30",
    },
    {
      id: 2,
      route: "Home to Office , ",
      distance: "2.5km",
      date: "Jan 13, 2023",
      price: "$30",
    },
    {
      id: 3,
      route: "Home to Office , ",
      distance: "2.5km",
      date: "Jan 13, 2023",
      price: "$30",
    },
    {
      id: 4,
      route: "Home to Office , ",
      distance: "2.5km",
      date: "Jan 13, 2023",
      price: "$30",
    },
  ];

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Home Screen Title and Logout Button */}
      <View className="flex-row items-center justify-between mt-8 mx-6">
        {/* Home Screen Title */}
        <Text style={{ fontSize: 32 }} className="text-neutral-400 font-bold">
          Hello,
        </Text>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-[#FFDA37] px-5 py-3 rounded-full"
        >
          <View className="flex-row items-center gap-1">
            <Text className="text-black  font-bold">Logout</Text>
            <Feather name="log-out" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Home Screen Text */}
      <Text style={{ fontSize: 32 }} className="text-white font-bold ml-6">
        {user?.fullName || "User"}
      </Text>
      <Text
        style={{ fontSize: 24 }}
        className="text-neutral-400 font-normal ml-6"
      >
        Welcome Back !
      </Text>

      {/* Booking Section */}
      <TouchableOpacity className="bg-[#FFDA37] px-5 py-3 rounded-2xl mt-8 mx-6">
        <View className="flex-row items-center gap-3">
          <FontAwesome5 name="car" size={24} color="black" />
          <Text className="text-black font-bold text-lg">Book a Ride</Text>
          <Feather
            className="ml-auto"
            name="chevron-right"
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>

      {/* Service Buttons Section */}
      <View className="flex-row items-center justify-center gap-8 mx-auto mt-8">
        {serviceButtons.map((button) => (
          <TouchableOpacity
            key={button.id}
            className="bg-[#2E2E2E] w-20 h-22 py-2 rounded-xl border border-[#FFDA37]"
          >
            <View className="flex-col items-center justify-center gap-2">
              {button.icon}
              <Text className="text-white font-bold text-lg">
                {button.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Rides Section */}
      <Text className="text-white font-bold text-3xl ml-6 mt-8">
        Recent Rides
      </Text>

      {/* Recent Rides Card List */}
      <View className="flex-col items-center justify-center gap-4 mt-4 mx-6">
        {recentRides.map((ride) => (
          <View
            key={ride.id}
            className="bg-[#2E2E2E] w-full py-4 px-5 rounded-xl border flex-row items-center justify-between"
          >
            <View className="flex-col flex-1">
              {/*  Route and Distance  */}
              <View className="flex-row items-center mb-1">
                <Text className="text-white text-lg font-semibold">
                  {ride.route}
                </Text>
                <Text className="text-white text-lg">{ride.distance}</Text>
              </View>
              {/* Date and Price */}
              <View className="flex-row items-center">
                <Text className="text-neutral-400 text-sm">{ride.date}</Text>
                <Text className="text-neutral-400 text-sm mx-2">•</Text>
                <Text className="text-[#FFDA37] text-sm font-semibold">
                  {ride.price}
                </Text>
              </View>
            </View>
            {/* Car Icon */}
            <FontAwesome5 name="car" size={24} color="#a3a3a3" />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
