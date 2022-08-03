import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Module } from "../../services/auth/AuthContext";
import { FruitIcons } from "../FruitIcons";
import { CenteredRow } from "../Row";
import { shadow } from "../shadow/Shadows";
import { MonoText, SubtitleText } from "../StyledText";
import { AccentView, Text, View } from "../Themed";

export default function ModuleItem({ module }: { module: Module }) {
  const navigation = useNavigation();

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
        navigation.navigate("Module", { module });
      }}
    >
      <AccentView style={styles.container}>
        {/* <Durian /> */}
        <SubtitleText style={{ marginLeft: 5 }}>
          {module.name || "unnamed"}
        </SubtitleText>
        {/* <SubtitleText style={{ fontSize: 18 }}>{type}</SubtitleText> */}
        <View style={styles.tempContainer}>
          {module.status === "active" ? (
            module.data.length > 0 ? (
              <>
                <MonoText style={{ marginLeft: 10 }}>°C</MonoText>
                <MonoText style={{ marginLeft: 10 }}>
                  {module?.data?.temperature?.toFixed(2) || "no temp"}
                </MonoText>
                <MonoText style={{ marginLeft: 10 }}>60%</MonoText>
              </>
            ) : (
              <MonoText style={{ marginLeft: 10 }}>No Data</MonoText>
            )
          ) : (
            <MonoText style={{ marginLeft: 10 }}>{module.status}</MonoText>
          )}
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
