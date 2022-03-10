import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import { SubtitleText, TitleText } from "../../components/StyledText";
import { PasswordInput, EmailInput } from "./../../components/Themed";
import { AuthContext } from "../../services/auth/AuthContext";

export const RegisterScreen = () => {
  const { onRegister } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const userInfo = {
    username: "tonphai",
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, padding: 20 }}
    >
      <TitleText>Register</TitleText>
      <View>
        <SubtitleText>Email</SubtitleText>
        <EmailInput onChangeText={setEmail} value={email} />

        <SubtitleText>Password</SubtitleText>
        <PasswordInput value={password} onChangeText={setPassword} />

        <SubtitleText>Repeat password</SubtitleText>
        <PasswordInput
          value={repeatedPassword}
          onChangeText={setRepeatedPassword}
        />
      </View>

      <Pressable
        onPress={() => {
          onRegister(email, password, repeatedPassword, userInfo);
        }}
      >
        <SubtitleText>Register</SubtitleText>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
