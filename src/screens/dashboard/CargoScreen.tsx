import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../../components/Themed";
import { CenteredRow } from "../../components/Row";
import { SubtitleText, TitleText } from "../../components/StyledText";
import { SafeTop } from "../../components/SafeTop";
import { FruitIcons } from "../../components/FruitIcons";
import BackButton from "../../components/BackButton";

export default function CargoScreen({ route, navigation }: any) {
  const {
    id,
    item: { location, plate, temperature, type },
  } = route.params;

  return (
    <View>
      <SafeTop />
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <CenteredRow>
          <BackButton navigation={navigation} />
          <FruitIcons type={type} size={55} />
          <TitleText style={{ marginLeft: 10 }}>{plate}</TitleText>
        </CenteredRow>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
  },
  tempContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 20,
    marginTop: 10,
  },
  fruitIcon: {
    width: 50,
    height: 50,
  },
});
