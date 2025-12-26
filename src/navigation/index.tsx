import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import newspaper from "../assets/newspaper.png";
import { Home } from "./screens/Home";
import { NotFound } from "./screens/NotFound";
import LoginScreen from "./screens/auth/LoginScreen";
import WelcomeScreen from "./screens/auth/WelcomeScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: "Feed",
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
  },
});

const AuthStack = createNativeStackNavigator({
  screens: {
    Welcome: {
      screen: WelcomeScreen,
      options: {
        title: "Welcome",
        headerShown: false,
      },
    },
    Login: {
      screen: LoginScreen,
      options: {
        title: "Login",
        headerShown: false,
      },
    },
    Register: {
      screen: RegisterScreen,
      options: {
        title: "Register",
        headerShown: false,
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: "Home",
      },
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: "404",
      },
      linking: {
        path: "*",
      },
    },
  },
});

export const AuthNavigation = createStaticNavigation(AuthStack);

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
