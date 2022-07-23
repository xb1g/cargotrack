import { Image, Pressable, StyleSheet } from "react-native";


import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../../types";

import { useContext } from "react";
import { SubtitleText } from "../../components/StyledText";

import { Button } from "../../components/StyledButton";
import { CenteredRow, Row } from "../../components/Row";

export default function TabUserScreen({
  navigation,
}: RootTabScreenProps<"TabUser">) {

const user = {
  photoURL: "https://i.pravatar.cc/300",
  displayName: "John Doe",
  uid : "123456789",
}



  return (
    user && (
      <View style={styles.container}>
        <CenteredRow>
          <Image
            style={{
              width: 75,
              height: 75,
              borderRadius: 100,
              marginLeft: 20,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={
              user.photoURL
                ? {
                    uri: user.photoURL,
                  }
                : {
                    uri: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/66/3752c02e4d11e6850f55326552edce/XYrTRjVGEeWGSA5C3XVMow_741d87208e5d427ee7ee6d01bd3fcb66_moralities-Paul-Bloom-picture-2013.jpg?auto=format%2Ccompress&dpr=1&w=36&h=",
                  }
            }
          />
          <SubtitleText>{user.displayName}</SubtitleText>
          <SubtitleText>{user.uid}</SubtitleText>
         {/* <SubtitleText>{user.providerId}</SubtitleText> */}
         </CenteredRow>
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
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
