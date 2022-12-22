import { Image, Pressable, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../../types";

import { useContext } from "react";
import { SubtitleText } from "../../components/StyledText";

import { Button } from "../../components/StyledButton";
import { CenteredRow, Row } from "../../components/Row";
import { AuthContext } from "../../services/auth/AuthContext";

export default function TabUserScreen({
  navigation,
}: RootTabScreenProps<"TabUser">) {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <CenteredRow>
        <View>
          <SubtitleText>{user?.email}</SubtitleText>
          <SubtitleText>{user?.name}</SubtitleText>
        </View>
        {/* <SubtitleText>{user.providerId}</SubtitleText> */}
      </CenteredRow>
      <Button onPress={() => logout()} darkColor={"#4d0000"}>
        <SubtitleText>Logout</SubtitleText>
      </Button>
      {/* <Button onPress={() => onLogout()} darkColor={"#89ffce"}>
           <SubtitleText>Logout</SubtitleText>
         </Button>
        <Button
          onPress={() => {
            currentUser &&
              updateProfile(currentUser, {
                displayName: "bank",
                photoURL:
                  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/de/e250c02c7f11e4a56e09598f8b6c89/PFA.png?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF",
              });
          }}
        >
          <SubtitleText>edit info</SubtitleText>
        </Button>
        <Button
          onPress={() => {
            console.log(currentUser);
          }}
        >
          <SubtitleText>auth</SubtitleText>
        </Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
