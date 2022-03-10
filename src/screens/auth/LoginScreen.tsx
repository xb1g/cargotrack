import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import { SubtitleText } from "../../components/StyledText";
import { AuthContext } from "./../../services/auth/AuthContext";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useContext(AuthContext);
  return (
    <View>
      <Text>Login</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
        }}
      ></KeyboardAvoidingView>
      <Pressable
        onPress={() => {
          onLogin();
        }}
      >
        <SubtitleText>Log in</SubtitleText>
      </Pressable>
    </View>
  );
};
