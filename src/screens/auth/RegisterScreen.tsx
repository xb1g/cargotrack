import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SubtitleText } from "../../components/StyledText";

export const RegisterScreen = () => {
  const [error, setError] = useState(null);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View>
        {/* <BackButton
          navigation={navigation}
          onPress={() => {
            page ? setPage(false) : navigation.goBack();
          }}
        /> */}
        {/* <View
          style={{
            backgroundColor: "#5c0c34",
            paddingBottom: 300,
            borderBottomRightRadius: 500,
            paddingTop: 100,
          }}
        >
          <AuthSmallLogo />
        </View> */}
        <View>
          <Text
            // variant="label"
            style={{
              color: "white",
              fontSize: 30,
              alignSelf: "flex-start",
              marginBottom: 20,
            }}
          >
            {"Create an account"}
          </Text>
          {/* <DescTextI>Create your account.</DescTextI> */}
          {/* {error && (
            <Spacer position="bottom" size="medium">
              <Text variant="error">{error}</Text>
            </Spacer>
          )} */}
          {/* {!page ? (
            <Center>
              <AuthInput
                label="Email"
                value={email}
                textContentType="emailAddress"
                autoCapitalize="none"
                returnKeyType={"next"}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
              <Spacer size="large" />
              <AuthInput
                label="Password"
                value={password}
                textContentType="password"
                returnKeyType={"next"}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
              />
              <Spacer size="large" />
              <AuthInput
                label="Repeat Password"
                value={repeatedPassword}
                textContentType="password"
                returnKeyType={"next"}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={(text) => setRepeatedPassword(text)}
              />

              <Spacer size="large" />

              {!isLoading ? (
                <AuthButton
                  type="primary"
                  size="large"
                  onPress={() => {
                    // console.log(email, password);
                    // onRegister(email, password, repeatedPassword);
                    setPage(true);
                  }}
                >
                  next
                </AuthButton>
              ) : (
                <ActivityIndicator animating={true} color="#7ed957" />
              )}
            </Center>
          ) : (
            <Center>
              <AuthInput
                label="Username"
                value={userInfo.username}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="username"
                keyboardType="default"
                maxLength={25}
                onChangeText={(text) =>
                  setUserInfo({ ...userInfo, username: text })
                }
              />
              <Spacer size="large" />

              <AuthInput
                label="Name"
                //placeholder="Thanawas"
                value={userInfo.name}
                keyboardType="default"
                textContentType="givenName"
                secureTextEntry={false}
                autoCorrect={false}
                onChangeText={(text) =>
                  setUserInfo({ ...userInfo, name: text })
                }
              />
              <Spacer size="large" />

              <AuthInput
                label="Lastname"
                //placeholder="Sitdown"
                value={userInfo.lastname}
                textContentType="familyName"
                secureTextEntry={false}
                onChangeText={(text) =>
                  setUserInfo({ ...userInfo, lastname: text })
                }
              />
              <Spacer size="large" />
              <AuthInput
                label="Year of birth"
                //placeholder="yyyy"
                maxLength={4}
                value={userInfo.yearOfBirth}
                keyboardType="number-pad"
                returnKeyType={"done"}
                autoCapitalize="none"
                onChangeText={(text) =>
                  setUserInfo({ ...userInfo, yearOfBirth: text })
                }
              />
              <Spacer size="large" />
              <AuthButton
                type="primary"
                size="large"
                onPress={() => {
                  // console.log(email, password, repeatedPassword, userInfo);
                  onRegister(email, password, repeatedPassword, userInfo);
                  // console.log(error);
                }}
              >
                register
              </AuthButton>
              <Spacer size="large" />
              <Spacer size="large" />
            </Center>
          )} */}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
