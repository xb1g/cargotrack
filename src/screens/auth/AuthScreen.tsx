import { View, Text, Pressable } from "react-native";
import React from "react";
import { SubtitleText } from "../../components/StyledText";

export const AuthScreen = ({ navigation }) => {
  return (
    <View>
      <Text>AuthScreen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <SubtitleText>Log in</SubtitleText>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <SubtitleText>Sign up</SubtitleText>
      </Pressable>
    </View>
  );
};
