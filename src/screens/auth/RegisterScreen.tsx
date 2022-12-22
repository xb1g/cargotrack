import { Pressable, KeyboardAvoidingView, Platform } from "react-native";
import React, { useContext, useState } from "react";
import { SubtitleText, TitleText } from "../../components/StyledText";
import {
  PasswordInput,
  EmailInput,
  Input,
  View,
  Text,
} from "./../../components/Themed";
import { Button } from "../../components/StyledButton";
import { AuthContext } from "../../services/auth/AuthContext";

export const RegisterScreen = () => {
  // const { onRegister } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { register } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, padding: 20 }}
    >
      {error ? (
        <View
          style={{ padding: 10, borderRadius: 10 }}
          darkColor={"#ff434371"}
          lightColor="#900222"
        >
          <Text>{error}</Text>
        </View>
      ) : null}
      <TitleText>Register</TitleText>
      <View>
        <SubtitleText>Name</SubtitleText>
        <Input value={name} onChangeText={setName} />
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
      <Button
        onPress={() => {
          if (
            name.length === 0 ||
            email.length === 0 ||
            password.length === 0 ||
            repeatedPassword.length === 0
          ) {
            setError("Please fill in all fields");
            return;
          }
          if (password !== repeatedPassword) {
            setError("Passwords do not match");
            return;
          }
          setError("");
          register(email, password, name);
        }}
      >
        <Text>Register</Text>
      </Button>
    </KeyboardAvoidingView>
  );
};
