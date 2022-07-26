import React from "react";
import { SubtitleText, TitleText } from "../../components/StyledText";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeTop } from "../../components/SafeTop";
import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";
import { Text, View } from "../../components/Themed";
import { Pressable } from "react-native";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
}

export const AuthScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeTop />

      <TitleText>LocLog</TitleText>
      <MyTabs />
    </View>
  );
};
