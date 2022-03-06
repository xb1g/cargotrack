import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { MonoText, SubtitleText, TitleText } from "../../components/StyledText";
import { shadow } from "../../components/shadow/Shadows";
import { AccentView, View } from "../../components/Themed";
import Durian from "../../../assets/icons/durian";
import { Row } from "../../components/Row";

export type CargoItemProps = {
  type: string;
  plate: string;
  temperature: number;
  location: {
    latitude: number;
    longitude: number;
  };
};

export function CargoItem({
  type,
  plate,
  temperature,
  location,
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
    >
      <AccentView style={styles.container}>
        {/* <Durian /> */}
        <Row>
          {type === "durian" ? (
            <Image
              source={require("../../../assets/icons/durian.png")}
              style={styles.fruitIcon}
            />
          ) : (
            <></>
          )}
          <SubtitleText style={{ marginLeft: 10 }}>{plate}</SubtitleText>
        </Row>
        {/* <SubtitleText style={{ fontSize: 18 }}>{type}</SubtitleText> */}
        <View style={styles.tempContainer}>
          <MonoText style={{ marginLeft: 10 }}>°C</MonoText>
          <MonoText style={{ marginLeft: 10 }}>
            {temperature.toFixed(2)}
          </MonoText>
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
  },
  fruitIcon: {
    width: 50,
    height: 50,
  },
});
