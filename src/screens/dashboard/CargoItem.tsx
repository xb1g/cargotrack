import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { MonoText, SubtitleText, TitleText } from "../../components/StyledText";
import { shadow } from "../../components/shadow/Shadows";
import { AccentView, View } from "../../components/Themed";
import Durian from "../../../assets/icons/durian";
import { CenteredRow, Row } from "../../components/Row";
import { FruitIcons } from "../../components/FruitIcons";

export type CargoItemProps = {
  type: string;
  plate: string;
  temperature: number;
  location: {
    latitude: number;
    longitude: number;
  };
  navigation?: any;
};

export function CargoItem({
  type,
  plate,
  temperature,
  location,
  navigation,
}: CargoItemProps) {
  return (
    <Pressable
      style={{
        padding: 10,
        margin: 10,
        borderRadius: 20,
        // backgroundColor: Colors.accent.primary,
        ...shadow.shadow2,
      }}
      onPress={() => {
        navigation.navigate("CargoInfo", {
          id: "1",
          item: {
            type,
            plate,
            temperature,
            location,
          },
        });
      }}
    >
      <AccentView style={styles.container}>
        {/* <Durian /> */}
        <CenteredRow>
          <FruitIcons type={type} />
          <SubtitleText style={{ marginLeft: 10 }}>{plate}</SubtitleText>
        </CenteredRow>
        {/* <SubtitleText style={{ fontSize: 18 }}>{type}</SubtitleText> */}
        <View style={styles.tempContainer}>
          <MonoText style={{ marginLeft: 10 }}>°C</MonoText>
          <MonoText style={{ marginLeft: 10 }}>
            {temperature.toFixed(2)}
          </MonoText>
          <MonoText style={{ marginLeft: 10 }}>60%</MonoText>
        </View>
      </AccentView>
    </Pressable>
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
});
