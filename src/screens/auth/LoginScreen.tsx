import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import { SubtitleText, TitleText } from "../../components/StyledText";

import { EmailInput } from "../../components/Themed";
import { PasswordInput } from "./../../components/Themed";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { onLogin } = useContext(AuthContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <TitleText>Email</TitleText>
      <EmailInput value={email} onChangeText={setEmail} />
      <SubtitleText>Password</SubtitleText>
      <PasswordInput value={password} onChangeText={setPassword} />

      <Pressable
        onPress={() => {
          console.log (email, password);
        }}
      >
        <SubtitleText>Log in</SubtitleText>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
