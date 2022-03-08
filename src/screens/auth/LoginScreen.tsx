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
      >
        {/* <AccountBackground>
          <BackButton navigation={navigation} />
          <View
            style={{
              backgroundColor: theme.colors.accent.primary,
              paddingBottom: 200,
              borderBottomLeftRadius: 200,
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.accent.quaternarym,
                paddingBottom: 150,
                borderBottomEndRadius: 250,
                paddingTop: 100,
              }}
            >
              <AuthSmallLogo />
            </View>
          </View>
          <TContainer>
            {error && (
              <Spacer position="bottom" size="medium">
                <Text variant="error">{error}</Text>
              </Spacer>
            )}
            <Center>
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                  alignSelf: "flex-start",
                  marginBottom: 20,
                }}
              >
                Log in
              </Text>
              <AuthInput
                label="Email"
                value={email}
                textContentType="emailAddress"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
              <Spacer size="large" />
              <AuthInput
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
              <Spacer size="large" />
              {!isLoading ? (
                <AuthButton
                  type="primary"
                  size="large"
                  onPress={() => {
                    onLogin(email, password);
                  }}
                >
                  Login
                </AuthButton>
              ) : (
                <ActivityIndicator animating={true} color="#7ed957" />
              )}
            </Center>
          </TContainer>
        </AccountBackground> */}
      </KeyboardAvoidingView>
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
