import { Pressable, KeyboardAvoidingView, Platform } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SubtitleText, TitleText } from "../../components/StyledText";

import { EmailInput, Text, View } from "../../components/Themed";
import { PasswordInput } from "./../../components/Themed";
import { SafeTop } from "../../components/SafeTop";
import { Button } from "../../components/StyledButton";
import { AuthContext } from "../../services/auth/AuthContext";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>();

  const { login, error: AuthError } = useContext(AuthContext);

  useEffect(() => {
    if (AuthError) {
      setError(AuthError.message);
    }
  }, [AuthError]);
  // const { onLogin } = useContext(AuthContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        padding: 10,
      }}
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
      <TitleText>Email</TitleText>
      <EmailInput value={email} onChangeText={setEmail} />
      <SubtitleText>Password</SubtitleText>
      <PasswordInput value={password} onChangeText={setPassword} />

      <Button
        onPress={() => {
          //check
          if (email.length === 0 || password.length === 0) {
            setError("Please fill in all fields");
            return;
          }
          setError(undefined);
          login(email, password);
        }}
      >
        <Text>Login</Text>
      </Button>
    </KeyboardAvoidingView>
  );
};
