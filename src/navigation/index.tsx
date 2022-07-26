/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { ColorSchemeName, Pressable, Text, View } from "react-native";

import Colors from "../constants/Colors";
import ModalScreen from "../screens/ModalScreen";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  AuthStackParamList,
  DashboardStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import TabHistoryScreen from "../screens/history/TabHistoryScreen";
import TabDashboardScreen from "../screens/dashboard/TabDashboardScreen";
import TabUserScreen from "../screens/user/TabUserScreen";
import { LinearGradient } from "expo-linear-gradient";
import CargoScreen from "../screens/dashboard/CargoScreen";

import { AuthScreen } from "../screens/auth/AuthScreen";
import { LoginScreen } from "./../screens/auth/LoginScreen";
import { RegisterScreen } from "./../screens/auth/RegisterScreen";
import { AuthContext } from "../services/auth/AuthContext";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {user ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

/**1
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();

function DashboardNavigator() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Dashboard"
        component={TabDashboardScreen}
        options={{
          headerShown: false,
        }}
      />
      <DashboardStack.Screen
        name="CargoInfo"
        component={CargoScreen}
        options={{
          headerShown: false,
        }}
      />
    </DashboardStack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabDashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabHistory"
        component={TabHistoryScreen}
        options={({ navigation }: RootTabScreenProps<"TabHistory">) => ({
          title: "History",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="TabDashboard"
        component={DashboardNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="truck" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabUser"
        component={TabUserScreen}
        options={{
          title: "User",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
