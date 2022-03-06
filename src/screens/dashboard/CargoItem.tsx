import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { MonoText, SubtitleText, TitleText } from "../../components/StyledText";
import { shadow } from "../../components/shadow/Shadows";
import { AccentView, View } from "../../components/Themed";

export type CargoItemProps = {
  type: "durian" | "banana";
  plate: string;
};

export function CargoItem({ item }: Props) {
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
        <SubtitleText style={{ marginLeft: 10 }}>{item.plate}</SubtitleText>
        <SubtitleText style={{ fontSize: 18 }}>{item.type}</SubtitleText>
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
});
